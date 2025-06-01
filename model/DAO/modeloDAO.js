/**************************************************************
 *  Title: Arquivo de acesso ao Banco de Dados
 *  Criação: 30/05/2025
 *  Autor: Kaio Felipe
 *  Versão: 1.0
 **************************************************************/

// Import do 'PrismaClient'
const { PrismaClient } = require('../../generated/prisma')

// Instância do 'PrismaClient'
const prisma = new PrismaClient()

// Funções de acesso e manipulação do Banco de Dados

// Função que retorna todos os registros. GET
const selectAll = async function(){

    // Comando SQL para retornar todos os registros
    let sql = 'SELECT * FROM Personagens'

    // Executa o comando SQL e guarda a resposta
    let consulta = await prisma.$queryRawUnsafe(sql)

    // Tratamento
    if(consulta) {
        return consulta
    } else {
        return false
    }
}

selectAll()

// Exportação das funções
module.exports = { selectAll }