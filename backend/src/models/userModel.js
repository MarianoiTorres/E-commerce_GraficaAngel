const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define(
        'User',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            firstname: {
                type: DataTypes.STRING,
            },
            lastname: {
                type: DataTypes.STRING,
            },
            email: {
                type: DataTypes.STRING,
            },
            password: {
                type: DataTypes.STRING,
            }
        }
    )
}