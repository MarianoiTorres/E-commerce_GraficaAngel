const { Sales, Product, User } = require('../../db')
const mercadopago = require('mercadopago')
const { MP_ACCESS_TOKEN } = process.env
const nodemailer = require('nodemailer')

const newOrder = async (cart, userId, deliver) => {
    mercadopago.configure({
        access_token: MP_ACCESS_TOKEN
    })

    const result = await mercadopago.preferences.create({
        items: cart,
        back_urls: {
            success: 'https://e-commercegraficaangel-production.up.railway.app/grafica/sales/success',
            failure: 'https://e-commercegraficaangel-production.up.railway.app/grafica/sales/failure',
            pending: 'https://e-commercegraficaangel-production.up.railway.app/grafica/sales/pending'
        },
        notification_url: 'https://e-commercegraficaangel-production.up.railway.app/grafica/sales/webhook',
        external_reference: String(userId),
        metadata: {
            deliver: deliver
        }
    })

    //console.log(result.response.init_point);
    return result.response.init_point
}

const receiveWebhook = async (payment) => {

    if (payment.type === 'payment') {
        const data = await mercadopago.payment.findById(payment['data.id'])
        const userId = await data.response.external_reference   //userId
        console.log(data.response.metadata);
        const user = await User.findByPk(userId)
        const items = await data.response.additional_info.items
        console.log(data.response.transaction_details.total_paid_amount);
        const productsId = items.map(product => product.id)

        const allProducts = await Product.findAll({
            where: { id: productsId }
        })

        const sales = await Promise.all(
            allProducts.map(async (product) => {

                const cartItem = items.find(item => item.id == product.id)

                const total = product.price * Number(cartItem.quantity)

                const newSale = await Sales.create({
                    userId: Number(userId),
                    productId: Number(cartItem.id),
                    quantity: Number(cartItem.quantity),
                    status: data.response.status,
                    total: total,
                    payment_method: data.response.payment_method.id,
                    deliver: data.response.metadata.deliver
                })

                if (newSale)  // ===> Descuento de stock
                {
                    product.stock -= cartItem.quantity
                    await product.save()
                }

                return newSale

            }))
        if (data.response.status === 'approved') {
            const transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                auth: {
                    user: 'practiceapplications0@gmail.com',
                    pass: process.env.pass,
                },
            });

            const mailOptions = {
                from: 'Remitente <practiceapplications0@gmail.com>',
                to: user.email,
                subject: `Pago Exitoso`,
                html: `
                    <html>
                        <body>
                        <h1>¡Pago Exitoso!</h1>
                        <p>Estimado ${user.firstname},</p>
                        <p>Tu pago de $${data.response.transaction_details.total_paid_amount} ha sido procesado con éxito. Gracias por tu compra.</p>
                        <table border="1">
                            <thead>
                              <tr>
                                <th>Producto</th>
                                <th>Cantidad</th>
                                <th>Precio</th>
                                <th>Total</th>
                              </tr>
                            </thead>
                            <tbody>
                              ${items
                        .map(
                            (product) => `
                                    <tr>
                                      <td>${product.title}</td>
                                      <td>${product.quantity}</td>
                                      <td>$${product.unit_price}</td>
                                      <td>$${product.unit_price * product.quantity}</td>
                                    </tr>
                                  `
                        )
                        .join('')}
                            </tbody>
                        </table>
                        </body>
                    </html>`


            };

            const mailOptionsSale = {
                from: 'Remitente <practiceapplications0@gmail.com>',
                to: 'marianotorres699@gmail.com',
                subject: `Nueva Venta - Grafica Angel`,
                html: `
                <html>
                    <head>
                      <title>Confirmación de Compra</title>
                    </head>
                    <body>
                      <h1>Confirmación de Compra</h1>
                      <p>Le informamos que se ha realizado una nueva compra en su tienda en línea. A continuación, se detallan los datos de la transacción:</p>
                      <ul>
                        <li><strong>Nombre del Cliente:</strong> ${user.firstname + ' ' + user.lastname}</li>
                        <li><strong>Fecha de la Compra:</strong> ${data.response.date_approved.split("T")[0]}</li>
                      <p>Productos Adquiridos:</p>
                      <table border="1">
                            <thead>
                              <tr>
                                <th>Producto</th>
                                <th>Cantidad</th>
                                <th>Precio</th>
                                <th>Total</th>
                              </tr>
                            </thead>
                            <tbody>
                              ${items
                        .map(
                            (product) => `
                                    <tr>
                                      <td>${product.title}</td>
                                      <td>${product.quantity}</td>
                                      <td>$${product.unit_price}</td>
                                      <td>$${product.unit_price * product.quantity}</td>
                                    </tr>
                                  `
                        )
                        .join('')}
                            </tbody>
                        </table>
                      <p><strong>Total de la Compra:</strong> ${data.response.transaction_details.total_paid_amount}</p>
                      <p><strong>Método de Pago:</strong> ${data.response.payment_method.id}</p>
                      <p><strong>Tipo de entrega:</strong> ${data.response.metadata.deliver}</p>
                    </body>
                </html>
                `
            }
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.error('Error al enviar el correo al cliente:', error);
                } else {
                    console.log('Correo enviado:', info.response);
                }
            });

            transporter.sendMail(mailOptionsSale, (error, info) => {
                if (error) {
                    console.error('Error al enviar el correo al propietario:', error);
                } else {
                    console.log('Correo enviado:', info.response);
                }
            });
        }

        return sales
    }
}

const getAllSales = async () => {
    const sales = await Sales.findAll({
        include: [
            {
                model: User,
                as: 'User',
            },
            {
                model: Product,
                as: 'Product',
            },
        ],
    })
    return sales
}

module.exports = {
    newOrder,
    receiveWebhook,
    getAllSales
}