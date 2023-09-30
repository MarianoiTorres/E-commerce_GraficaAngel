const { 
    createProduct, 
    getAllProducts, 
    getProductById, 
    deleteProductCtrl, 
    updateProduct 
} = require("../controllers/productsController")


const getProducts = async (req, res) => {
    try {
        const products = await getAllProducts()
        res.status(200).json(products)
    } catch (error) {
        res.status(400).json({ message: 'Error' })
    }
}

const getProduct = async (req, res) => {
    try {
        const { id } = req.params
        const product = await getProductById(id)
        res.status(200).json(product)
    } catch (error) {
        res.status(400).json({ message: 'Error' })
    }
}

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params
        const deletedProduct = await deleteProductCtrl(id)
        res.status(200).json(deletedProduct)
    } catch (error) {
        res.status(400).json({ message: 'Error' })
    }
}

const postProduct = async (req, res) => {
    try {
        const { name, detail, stock } = req.body
        const newProduct = await createProduct({ name, detail, stock })
        res.status(200).json(newProduct)
    } catch (error) {
        res.status(400).json({ message: 'Error' })
    }
}

const putProduct = async (req, res) => {
    try {
        const { id } = req.params
        const { product } = req.body
        const updatedProduct = await updateProduct(product, id)
        res.status(200).json(updatedProduct)
    } catch (error) {
        res.status(400).json({ message: 'Error' })
    }
}

module.exports = {
    getProduct,
    getProducts,
    deleteProduct,
    postProduct,
    putProduct
}