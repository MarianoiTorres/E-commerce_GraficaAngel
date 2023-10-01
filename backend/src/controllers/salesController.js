const { Sales, Product, User } = require('../../db')
const mercadopago = require('mercadopago')
const { MP_ACCESS_TOKEN } = process.env

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
        notification_url: 'https://3b49-190-136-227-235.ngrok.io/grafica/sales/webhook',
        external_reference: String(userId)
    })

    return result
}

const receiveWebhook = async (payment) => {

    if (payment.type === 'payment') {
        const data = await mercadopago.payment.findById(payment['data.id'])
        const userId = await data.response.external_reference   //userId
        const items = await data.response.additional_info.items

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