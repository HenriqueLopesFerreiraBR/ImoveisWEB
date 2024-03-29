const Sequelize = require('sequelize');
const database = require('../database/connection');

const Cliente = database.define("Cliente",{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome:{
        type: Sequelize.STRING,
        allowNull:false
    },
    email:{
        type: Sequelize.STRING,
        allowNull:false,
        unique:true
    },
    contato:{
        type:Sequelize.STRING,
        allowNull:false
    },
      historicoInteracoes:{
        type:Sequelize.STRING,
        
    }

},{timestamps:true});

Cliente.sync({force:false})

module.exports = Cliente