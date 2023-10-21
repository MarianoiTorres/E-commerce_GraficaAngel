const express = require('express')
const {PORT} = process.env || 3001
const cors = require('cors')
const morgan = require('morgan')
const router = require('./src/routes/index')
const { sequelize } = require('./db')
 const { User } = require('./db')
const { encrypt } = require('./src/utils/passwordEncrypt')

const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.use('/grafica', router)

sequelize.sync({ alter: true }).then(async() => {   

    const admin = await User.findOne({ where: { email: 'admin@gmail.com' } });
        if (!admin) {
            const passwordEncrypt = await encrypt(process.env.ADMIN_PASSWORD)
            await User.create({
                email: 'admin@gmail.com',
                password: passwordEncrypt,
                isAdmin: true
            });
        }

    app.listen(PORT, "0.0.0.0", () => { 
        console.log('server on port 3001');
    })
})     