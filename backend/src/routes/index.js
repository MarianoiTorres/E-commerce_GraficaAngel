const { Router } = require('express')
const userRouter = require('./userRoute')
const productRouter = require('./productRoute')
const salesRouter = require('./salesRoute')

const router = Router()

router.use('/users', userRouter)
router.use('/products', productRouter)
router.use('/sales', salesRouter)

module.exports = router