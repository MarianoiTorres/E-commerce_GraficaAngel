const {
    createUser,
    updateUser,
    deleteUserCtrl,
    getUserById,
    getAllUsers,
    searchUser
} = require('../controllers/userController')

const registerUser = async (req, res) => {
    try {
        const { firstname, lastname, email, password, age, phone } = req.body
        const createdUser = await createUser({ firstname, lastname, email, password, age, phone })
        res.status(200).json(createdUser)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const loginUser = async(req, res) => {
    try {
        const {email, password} = req.body
        const user = await searchUser(email, password)
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({message: 'Erro'})
    }
}

const putUser = async (req, res) => {
    try {
        const { id } = req.params
        const { user } = req.body
        const updatedUser = await updateUser(user, id)
        res.status(200).json(updatedUser)
    } catch (error) {
        res.status(400).json({ message: 'Error' })
    }
}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params
        console.log(id);
        const deletedUser = await deleteUserCtrl(id)
        res.status(200).json(deletedUser)
    } catch (error) {
        res.status(400).json({ message: 'Error' })
    }
}

const getUser = async (req, res) => {
    try {
        const { id } = req.params
        const user = await getUserById(id)
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({ message: 'Error' })
    }
}

const getUsers = async (req, res) => {
    try {
        const users = await getAllUsers()
        res.status(200).json(users)
    } catch (error) {
        res.status(400).json({ message: 'Error' })
    }
}

module.exports = {
    registerUser,
    putUser,
    deleteUser,
    getUser,
    getUsers,
    loginUser
}