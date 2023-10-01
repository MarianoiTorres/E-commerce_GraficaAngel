const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const router = require('./src/routes/index')
const { sequelize } = require('./db')


const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.use('/grafica', router)
sequelize.sync({ force: true }).then(() => {
    app.listen(3001, () => { 
        console.log('server on port 3001');
    })
})     