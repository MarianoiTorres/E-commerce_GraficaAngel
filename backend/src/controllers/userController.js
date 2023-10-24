const { User } = require('../../db')
const { encrypt, verify } = require('../utils/passwordEncrypt')

const createUser = async (user) => {
    const userFound = await User.findOne({ where: { email: user.email } })

    if (userFound) return { message: 'Email en uso' }
    const passwordHash = await encrypt(user.password)

    const newUser = await User.create({
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        age: user.age,
        phone: user.phone,
        password: passwordHash
    })
    return newUser
}

const searchUser = async (email, password) => {
    const user = await User.findOne({
        where: {
            email
        }
    })
    if (!user) return { message: "usuario no registrado" };
    const passwordCompare = await verify(password, user.password)
    if (!passwordCompare) return {  authenticated: passwordCompare, isAdmin: false };
    return {
        authenticated: passwordCompare,
        isAdmin: user.isAdmin,
        userId: user.id
    }
}

const updateUser = async (user, id) => {
    const userUpdated = await User.update(user, { where: { id } })
    return userUpdated
}

const deleteUserCtrl = async (id) => {
    const userDeleted = await User.destroy({ where: { id } })
    return userDeleted
}

const getUserById = async (id) => {
    const user = await User.findByPk(id)
    return user
}

const getAllUsers = async () => {
    const users = await User.findAll({ order: [['id', 'ASC']] })
    return users
}

module.exports = {
    createUser,
    searchUser,
    updateUser,
    deleteUserCtrl,
    getUserById,
    getAllUsers
}