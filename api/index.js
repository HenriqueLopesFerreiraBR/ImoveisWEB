const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const connection = require("./src/database/connection");

//importando os models para o o sequelize consiga criar as tabelas automaticamente
const User = require('./src/model/User')
const Cliente = require('./src/model/Cliente')
const Imovel = require('./src/model/Imovel')
const Contrato = require('./src/model/Contrato')


//importando as rotas 
const ClienteRouter = require('./src/router/ClienteRouter')
const ImovelRouter = require('./src/router/imovelRouter')
const ContratoRouter = require('./src/router/ContratoRouter')
const UserRouter = require('./src/router/UserRouter')

dotenv.config();

const port = process.env.PORT;

try {
   connection.authenticate();
  console.log('Banco de dados conectado com sucesso');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}


// // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(cors());

// Utilizando rotas
app.use('/api/cliente',ClienteRouter)
app.use('/api/imovel',ImovelRouter)
app.use('/api/contrato',ContratoRouter)
app.use('/api/usuario', UserRouter)






app.listen(port, () => console.log(`Example app listening on port ${port}!`));
