const {DataTypes} = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define(
        'Product',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
            },
            detail: {
                type: DataTypes.STRING
            },
            image: {
                type: DataTypes.STRING
            },
            stock: {
                type: DataTypes.INTEGER,
            },
            price: {
                type: DataTypes.DECIMAL
            }
        }
    )
}