const { Router } = require('express')
const { createOrder, webhook, getSales } = require('../handlers/salesHandler')

const salesRouter = Router()

salesRouter.post('/create-order', createOrder)
salesRouter.post('/webhook', webhook)
salesRouter.get('/', getSales)

module.exports = salesRouter