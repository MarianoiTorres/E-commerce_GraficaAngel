const { Router } = require('express')

const router = Router()

router.get('/', async(req, res) => {
    res.status(200).json('hola')
})

module.exports = router