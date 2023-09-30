require('dotenv').config();
const { Sequelize } = require('sequelize')
const ProductModel = require('./src/models/productModel')
const UserModel = require('./src/models/userModel')

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
    { logging: false, native: false })

ProductModel(sequelize)
UserModel(sequelize)

const { Product, User } = sequelize.models;

module.exports = { ...sequelize.models, sequelize }