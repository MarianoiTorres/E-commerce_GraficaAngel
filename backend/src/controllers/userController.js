const { User } = require('../../db')

const createUser = async (user) => {
    const newUser = await User.create({
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        password: user.password
    })
    return newUser
}

const searchUser = async(email, password) => {
    const user = await User.findOne({where: {
        email,
        password
    }})
    return user !== null
}

const updateUser = async (user, id) => {
    const userUpdated = await User.update(user, { where: { id } })
    return userUpdated
}

const deleteUserCtrl = async (id) => {
    const userDeleted = await User.destroy({where: {id }})
    return userDeleted
}

const getUserById = async (id) => {
    const user = await User.findByPk(id)
    return user
}

const getAllUsers = async () => {
    const users = await User.findAll()
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