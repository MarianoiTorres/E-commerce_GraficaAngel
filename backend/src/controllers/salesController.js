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
        notification_url: 'https://b125-190-136-227-235.ngrok.io/grafica/sales/webhook',
        external_reference: String(userId)
    })

    //console.log(result.response.init_point);
    return result.response.init_point
}

const receiveWebhook = async (payment) => {

    if (payment.type === 'payment') {
        const data = await mercadopago.payment.findById(payment['data.id'])
        const userId = await data.response.external_reference   //userId
        const user = await User.findByPk(userId)
        const items = await data.response.additional_info.items
        console.log(items);
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
                    total: total
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