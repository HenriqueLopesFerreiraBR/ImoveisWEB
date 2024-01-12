const Sequelize = require("sequelize");
const Database = require("../database/connection");

const Imovel = Database.define(
    "Imovel",
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        endereco: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        tipo: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        preco: {
            type: Sequelize.DOUBLE,
        },
        status: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    },
    { timestamps: true }
);

module.exports = Imovel;
