/**************************************************************
 *  Title: Arquivo de controle e manipulação de requisições
 *  Criação: 30/05/2025
 *  Autor: Kaio Felipe
 *  Versão: 1.0
 **************************************************************/

// Import do arquivo de consulta ao banco 'DAO' e arquivo de satatus code
const database = require('../model/DAO/modeloDAO.js')
const MESSAGE    = require('../config/errorMessages.js')


// Função GET: retorna todos os registros // OK
const allPersonagens = async function(){

    // Solicita a consulta ao Banco de Dados e guarda a resposta
    let responseBd = await database.selectAll()

    // Tratamento
    if(responseBd == false) {
        return MESSAGE.INTERNAL_SERVER_ERROR
    } else {
        return recurso = {
            statusCode: 200,
            count: Object.values(responseBd).length,
            personagens: responseBd
        }
    }
}


// Função POST: insere um novo registro // OK
const insertNew = async function(personagem){

    // Validação dos campos
    let statusValidacao = true
    // Percorre o objeto procurando campos vazios
    Object.values(personagem).forEach(elemento => {
        if(elemento == '') {
            statusValidacao = false
        } 
    })

    // Tratamento do campo 'dataCriacao'
    personagem.dataCriacao = personagem.dataCriacao.slice(0, 2) + '-' + 
    personagem.dataCriacao.slice(2, 4) + '-' + 
    personagem.dataCriacao.slice(4)

    if(statusValidacao) {
        
        // Envia o objeto para inserção no BD e guarda a resposta
        let bancoDeDados = await database.insertNewRegistro(personagem)

        // Tratamento para preparar a resposta
        if(bancoDeDados == false) {
            return MESSAGE.INTERNAL_SERVER_ERROR
        } else {
            return MESSAGE.CREATED
        }
    } else {
        return MESSAGE.BAD_REQUEST
    }
}



// Exportação das funções
module.exports = { allPersonagens, insertNew }