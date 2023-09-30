require('dotenv').config();
const { Sequelize } = require('sequelize')
const ProductModel = require('./src/models/productModel')
const UserModel = require('./src/models/userModel')
const SalesModel = require('./src/models/salesModel')

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
    { logging: false, native: false })

ProductModel(sequelize)
UserModel(sequelize)
SalesModel(sequelize)

const { Product, User, Sales } = sequelize.models;

module.exports = { ...sequelize.models, sequelize }