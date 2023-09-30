const { Router } = require('express')
const {
    getProduct, 
    getProducts,
    deleteProduct,
    postProduct,
    putProduct
} = require('../handlers/productsHandler')

const productRouter = Router()

productRouter.get('/:id', getProducts) // detalles producto
productRouter.get('/all', getProduct) // todos los productos
productRouter.delete('/:id', deleteProduct) // eliminar producto
productRouter.post('/', postProduct) // crear producto
productRouter.put('/:id', putProduct) // actualizar producto

module.exports = productRouter