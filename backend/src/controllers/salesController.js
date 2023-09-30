const {Sales, Product} = require('../../db')

const saveSale = async({userId, productId, quantity}) => {

    const product = await Product.findByPk(productId)

    if(quantity > product.stock) return 'Sin stock'   // ====> Verificar si hay stock suficiente

    const newSale = await Sales.create({
        userId,
        productId, 
        quantity
    })
    
    if(newSale)  // ===> Descuento de stock
    {
        product.stock -= quantity
        await product.save()
    }

    return newSale
}

module.exports = {
    saveSale
}