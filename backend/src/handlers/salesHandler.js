const { saveSale } = require("../controllers/salesController");

const postSale = async(req, res) => {
    try {
        const { sale } = req.body
        const newSale = await saveSale(sale)
        res.status(200).json(newSale)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    postSale
}