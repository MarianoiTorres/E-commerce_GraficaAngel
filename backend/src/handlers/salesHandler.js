const { newOrder, receiveWebhook, getAllSales } = require("../controllers/salesController");

const createOrder = async (req, res) => {
    try {
        const { cart, userId } = req.body
        const order = await newOrder(cart, userId)
        res.status(200).json(order)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const webhook = async (req, res) => {
    try {
        const payment = req.query
        const response = await receiveWebhook(payment)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getSales = async(req, res) => {
    try {
        const sales = await getAllSales()
        res.status(200).json(sales)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    createOrder,
    webhook,
    getSales
}