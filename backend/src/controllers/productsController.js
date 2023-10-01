const { Product } = require('../../db')
const cloudinary = require('cloudinary').v2;
const { CLOUD_NAME, API_KEY, API_SECRET } = process.env

cloudinary.config({
    cloud_name: CLOUD_NAME,
    api_key: API_KEY,
    api_secret: API_SECRET,
});

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
    //const uploadedResponse = await cloudinary.uploader.upload(product.image)   // product.image = base64
    //product.image = uploadedResponse.secure_url
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