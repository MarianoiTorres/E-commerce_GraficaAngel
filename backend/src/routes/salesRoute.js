const { Router } = require('express')
const { postSale } = require('../handlers/salesHandler')

const salesRouter = Router()

salesRouter.post('/', postSale)

module.exports = salesRouter