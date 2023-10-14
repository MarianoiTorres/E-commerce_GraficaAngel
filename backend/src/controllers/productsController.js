const { Product, Sales } = require('../../db')
const cloudinary = require('cloudinary').v2;
const { CLOUD_NAME, API_KEY, API_SECRET } = process.env

cloudinary.config({
    cloud_name: CLOUD_NAME,
    api_key: API_KEY,
    api_secret: API_SECRET,
});

const getAllProducts = async () => {
    const products = await Product.findAll({order: [['id', 'ASC']]})
    return products
}

const getProductById = async (id) => {
    const product = await Product.findByPk(id)
    return product
}

const deleteProductCtrl = async (id) => {
    console.log('llegue 1');
    const deleteSaleReference = await Sales.destroy({where: {productId: id}})
    console.log(deleteSaleReference !== 1);
    const product = await Product.destroy({where: {id}})
    return product
} 

const createProduct = async (product) => {
    const uploadedResponse = await cloudinary.uploader.upload(product.image)   // product.image = base64
    product.image = uploadedResponse.secure_url
    const newProduct = await Product.create(product)
    return newProduct
}

const updateProduct = async (product, id) => {
    const uploadedResponse = await cloudinary.uploader.upload(product.image)   // product.image = base64
    product.image = uploadedResponse.secure_url
    const [rowsUpdated, [updatedProduct]] = await Product.update(product, {
        where: { id },
        returning: true, //devuelve los registros actualizados
      });
      if (rowsUpdated === 1 && updatedProduct) {
        return updatedProduct
      } else {
        return null;
      }
}

module.exports = {
    getAllProducts,
    getProductById,
    deleteProductCtrl,
    createProduct,
    updateProduct,
}