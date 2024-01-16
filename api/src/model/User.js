const Sequelize = require("sequelize");
const Database = require("../database/connection"); // Importa a instância do Sequelize

const User = Database.define(
    "Usuario",
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        nome: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
        },
        senha: {
            type: Sequelize.STRING,
        },
        isAdmin: {
            type: Sequelize.BOOLEAN,
            default: false,
        },
    },
    { timestamps: true }
);

User.sync({ force: false });

module.exports = User;
