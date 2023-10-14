const { Sales, Product, User } = require('../../db')
const mercadopago = require('mercadopago')
const { MP_ACCESS_TOKEN } = process.env
const nodemailer = require('nodemailer')

const newOrder = async (cart, userId) => {
    /*cart": [
        {
            title:"a",
            unit_price: 5,
            currency_id: "ARS",
            quantity: 1,
            id: 1 (productId)
        }
    ]*/
    mercadopago.configure({
        access_token: MP_ACCESS_TOKEN
    })

    const result = await mercadopago.preferences.create({
        items: cart,
        back_urls: {
            success: 'http://localhost:3001/grafica/sales/success',
            failure: 'http://localhost:3001/grafica/sales/failure',
            pending: 'http://localhost:3001/grafica/sales/pending'
        },
        notification_url: 'https://0e14-181-1-52-69.ngrok.io/grafica/sales/webhook',
        external_reference: String(userId)
    })

    //console.log(result.response.init_point);
    return result.response.init_point
}

const receiveWebhook = async (payment) => {
    console.log('holaaaa');
    if (payment.type === 'payment') {
        const data = await mercadopago.payment.findById(payment['data.id'])
        const userId = await data.response.external_reference   //userId
        const user = await User.findByPk(userId)
        const items = await data.response.additional_info.items
        console.log(data.response.date_approved);
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
                    payment_method: data.response.payment_method.id
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
                to: user.email,
                subject: `Pago Exitoso`,
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
                        <li><strong>Fecha y Hora de la Compra:</strong></li>
                        <li><strong>Número de Pedido:</strong> [Número de Pedido]</li>
                      </ul>
                      <p>Productos Adquiridos:</p>
                      <ul>
                        <li>[Nombre del Producto 1]</li>
                        <li>[Nombre del Producto 2]</li>
                        <!-- Agrega más elementos de lista para productos adicionales -->
                      </ul>
                      <p><strong>Total de la Compra:</strong> [Monto Total]</p>
                      <p><strong>Método de Pago:</strong> [Método de Pago Utilizado]</p>
                      <p>Por favor, asegúrese de revisar esta transacción y prepare los productos para su envío o entrega. Si tiene alguna pregunta o necesita más información, no dude en ponerse en contacto con el cliente.</p>
                      <p>Gracias por confiar en nosotros.</p>
                      <p>Atentamente,<br>[Nombre de la Tienda]</p>
                    </body>
                </html>
                `
            }
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.error('Error al enviar el correo:', error);
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