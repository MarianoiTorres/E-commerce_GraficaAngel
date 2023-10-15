const { Router } = require('express')
const { contactHandler } = require('../handlers/contactHandler')

const contactRouter = Router()

contactRouter.post('/', contactHandler)

module.exports = contactRouter