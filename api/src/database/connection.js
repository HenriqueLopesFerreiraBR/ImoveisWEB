const Sequelize = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();

const connection = new Sequelize("db_imovel", "root", "", {
    host: "localhost",
    dialect: "mysql",
});

// Importe os modelos aqui
 //const Usuario = require('../model/User');
//const Cliente = require("../model/Cliente");
// const Contrato = require('../model/Contrato');
// const Imovel = require('../model/Imovel');

// Sincronize os modelos com o banco de dados
// sequelize.sync();

module.exports = connection;
