const { Router } = require('express')
const userRouter = require('./userRoute')
const productRouter = require('./productRoute')
const salesRouter = require('./salesRoute')
const contactRouter = require('./contactRoute')

const router = Router()

router.use('/users', userRouter)
router.use('/products', productRouter)
router.use('/sales', salesRouter)
router.use('/contact', contactRouter)

module.exports = router