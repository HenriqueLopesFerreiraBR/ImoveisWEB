const Sequelize = require('sequelize');
const Database = require('../database/connection');

const Cliente = require('./Cliente');
const Imovel = require('./Imovel')

const Contrato = Database.define('Contrato',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },tipoContrato:{
        type:Sequelize.STRING,
        allowNull:false
    },
    dataInicio:{
        type:Sequelize.DATE,
        allowNull:false
    },
    dataFim:{
        type:Sequelize.DATE
    },
},{timestamps:true})



Contrato.belongsTo(Cliente, { foreignKey: 'idCliente' });
Contrato.belongsTo(Imovel, { foreignKey: 'idImovel' });


Contrato.sync({force:false})
module.exports = Contrato