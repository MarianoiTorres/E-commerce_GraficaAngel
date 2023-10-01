const { Router } = require('express')
const { createOrder, webhook, getSales } = require('../handlers/salesHandler')

const salesRouter = Router()

salesRouter.post('/create-order', createOrder)  // Crear orden de compra
salesRouter.post('/webhook', webhook)   // Recibe los eventos de la compra (success, pending, rejected), descuenta stock y notifica por mail
salesRouter.get('/', getSales)   // Traer todas las ventas
// ./ngrok.exe http 3001
module.exports = salesRouter