const { sendMail } = require("../controllers/contactController")


const contactHandler = async (req, res) => {
    try {
        const { data } = req.body
        const mailSended = await sendMail(data)
        console.log(mailSended);
        res.status(200).json(mailSended)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    contactHandler
}