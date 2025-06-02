/**************************************************************
 *  Title: Lista de status code
 *  Criação: 30/05/2025
 *  Autor: Kaio Felipe
 *  Versão: 1.0
 **************************************************************/

// Status Code: 500
const INTERNAL_SERVER_ERROR = {statusCode: 500, message: 'Erro interno no servidor...'}

// Status Code: 400
const BAD_REQUEST           = {statusCode: 400, message: "Erro de requisição, verifique os dados do body ou url"}

// Status Code: 201
const CREATED               = {statusCode: 201, message: 'Personagem inserido com sucesso.'}

// Status Code: 200
const OK                    = {statusCode: 200, message: 'A solicitação foi bem sucedida.'}

// Status Code: 404
const NOT_FOUND             = {statusCode: 404, message: 'O ID informado não existe na base de dados!'}


// Exporta as constantes
module.exports = { INTERNAL_SERVER_ERROR, BAD_REQUEST, CREATED, OK, NOT_FOUND }