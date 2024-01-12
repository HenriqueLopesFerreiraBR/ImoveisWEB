const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const connection = require("./src/database/connection");

const User = require('./src/model/User')
const Cliente = require('./src/model/Cliente')
const Imovel = require('./src/model/Imovel')
const Contrato = require('./src/model/Contrato')

dotenv.config();

const port = 3005;

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

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
