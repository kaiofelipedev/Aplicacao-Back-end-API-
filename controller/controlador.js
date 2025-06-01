/**************************************************************
 *  Title: Arquivo de controle e manipulação de requisições
 *  Criação: 30/05/2025
 *  Autor: Kaio Felipe
 *  Versão: 1.0
 **************************************************************/

// Import do arquivo de consulta ao banco 'DAO' e arquivo de satatus code
const database = require('../model/DAO/modeloDAO.js')
const ERROR    = require('../config/errorMessages.js')


// Função GET: retorna todos os registros
const allPersonagens = async function(){

    // Solicita a consulta ao Banco de Dados e guarda a resposta
    let responseBd = await database.selectAll()

    // Tratamento
    if(responseBd == false) {
        return ERROR.INTERNAL_SERVER_ERROR
    } else {
        return recurso = {
            statusCode: 200,
            count: Object.values(responseBd).length,
            personagens: responseBd
        }
    }
}

// Exportação das funções
module.exports = { allPersonagens }