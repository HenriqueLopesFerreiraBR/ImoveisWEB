const Sequelize = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();

const database = process.env.URL_DB
const user = process.env.USER_DB
const password = process.env.PASSWORD_DB
const host = process.env.HOST_DB

const connection = new Sequelize(database, user, password, {
    host: host,
    dialect: "mysql",
});

// Sincronize os modelos com o banco de dados
 //connection.sync();

module.exports = connection;
