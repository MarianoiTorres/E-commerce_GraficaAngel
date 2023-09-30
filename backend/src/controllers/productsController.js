const { Product } = require('../../db')

const getAllProducts = async () => {
    const products = await Product.findAll()
    return products
}

const getProductById = async (id) => {
    const product = await Product.findByPk(id)
    return product
}

const deleteProductCtrl = async (id) => {
    const product = await Product.destroy({where: {id}})
    return product
}

const createProduct = async (product) => {
    const newProduct = await Product.create(product)
    return newProduct
}

const updateProduct = async (product, id) => {
    const productUpdated = await Product.update(product, {where: {id}})
    return productUpdated
}

module.exports = {
    getAllProducts,
    getProductById,
    deleteProductCtrl,
    createProduct,
    updateProduct,
}