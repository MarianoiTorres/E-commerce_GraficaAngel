const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    const SalesModel = sequelize.define(
        'Sales',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            quantity: {
                type: DataTypes.INTEGER,
                
            },
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            productId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            status: {
                type: DataTypes.STRING
            },
            total: {
                type: DataTypes.INTEGER
            },
            payment_method: {
                type: DataTypes.STRING
            }
        }
    )

    SalesModel.belongsTo(sequelize.models.Product, { foreignKey: 'productId' })
    SalesModel.belongsTo(sequelize.models.User, { foreignKey: 'userId' })

    return SalesModel
}