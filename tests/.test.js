// Importar o sequelize
const sequelize = require('sequelize')

// Importar as configurações da conexão
const config = require('../database/config.json').development;

// Criar uma conexão
const conexao = new sequelize(config)

// Realizar e imprimir uma consulta
async function teste(){
    let sql = 'SELECT * FROM generos'
    let resultado = await conexao.query(sql);
    console.log(resultado);
}

teste();