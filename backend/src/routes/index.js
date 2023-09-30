const { Router } = require('express')
const userRouter = require('./userRoute')
const productRouter = require('./productRoute')

const router = Router()

router.use('/users', userRouter)
router.use('/products', productRouter)

module.exports = router 