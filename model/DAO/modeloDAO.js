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

// Função que retorna todos os registros. GET // OK
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


// Função que insere um novo registros. POST // OK
const insertNewRegistro = async function(personagem){

    // Comando SQL
    let sql = `INSERT INTO personagens
    (nome, apelido, biografia, dataCriacao, localNasc, descVestimenta, foto, especie, nomeCriador) VALUES
    ('${personagem.nome}', '${personagem.apelido}', '${personagem.biografia}', '${personagem.dataCriacao}',
    '${personagem.localNasc}', '${personagem.descVestimenta}', '${personagem.foto}', '${personagem.especie}',
    '${personagem.nomeCriador}')`

    // Executa o comando sql e guarda uma resposta
    let insertBd = await prisma.$executeRawUnsafe(sql)

    // Tratamento para resposta do banco de dados
    if(insertBd) {
        return true
    } else {
        return false
    }
}


// Função que atualiza um registro existente. PUT // OK
const updateRegistro = async function(dados){

    // Comando SQL
    let sql = `UPDATE personagens SET nome = '${dados.nome}', apelido = '${dados.apelido}', 
    biografia = '${dados.biografia}', dataCriacao = '${dados.dataCriacao}', 
    localNasc = '${dados.localNasc}', descVestimenta = '${dados.descVestimenta}', 
    foto = '${dados.foto}', especie = '${dados.especie}', nomeCriador = '${dados.nomeCriador}' 
    WHERE id = ${dados.id}`

    // Executa o comando SQL e guarda uma resposta
    let sqlResult = await prisma.$executeRawUnsafe(sql)

    // Tratamento
    if(sqlResult) {
        return true
    } else {
        return false
    }
}


// Exportação das funções
module.exports = { selectAll, insertNewRegistro, updateRegistro }