/**************************************************************
 *  Title: Lista de status code
 *  Criação: 30/05/2025
 *  Autor: Kaio Felipe
 *  Versão: 1.0
 **************************************************************/

// Status Code: 500
const INTERNAL_SERVER_ERROR = {statusCode: 500, message: 'Erro interno no servidor...'}
const BAD_REQUEST           = {statusCode: 400, message: 'Erro na requisição, verifique se todos os campos  foram preenchidos!'}
const CREATED = {statusCode: 201, message: 'Personagem inserido com sucesso.'}

// Exporta as constantes
module.exports = { INTERNAL_SERVER_ERROR, BAD_REQUEST, CREATED }