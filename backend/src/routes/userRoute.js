const { Router } = require('express')
const { registerUser, putUser, deleteUser, getUser, getUsers, loginUser } = require('../handlers/usersHandler')

const userRouter = Router()

userRouter.get('/all', getUsers) //todos los usuarios
userRouter.get('/:id', getUser) // un solo usuario
userRouter.post('/register', registerUser) // crear usuario (register)
userRouter.post('/login', loginUser)
userRouter.put('/:id', putUser) // actualizar usuario 
userRouter.delete('/:id', deleteUser) // eliminar usuario

module.exports = userRouter