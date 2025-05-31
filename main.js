/**************************************************************
 *  Title: Arquivo principal do projeto 'DESENHOS_API'
 *  Criação: 30/05/2025
 *  Autor: Kaio Felipe
 *  Versão: 1.0
 **************************************************************/

// Import dos módulos 'express' e 'cors'
const Express = require('express')
const cors    = require('cors')

// Instância do módulo 'Express'
const app = Express()

// Teste de conexão
app.listen(8080, () => {
    console.log('Servidor rodando na porta 8080...')
})