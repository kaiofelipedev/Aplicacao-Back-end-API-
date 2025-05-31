/**************************************************************
 *  Title: Arquivo principal do projeto 'DESENHOS_API'
 *  Criação: 30/05/2025
 *  Autor: Kaio Felipe
 *  Versão: 1.0
 **************************************************************/

// Import dos módulos 'express' e 'cors'
const Express = require('express')
const cors    = require('cors')

// Import de arquivos
const servidor = require('./server/boot.js')

// Instância do módulo 'Express'
const app = Express()

// Teste de conexão
// servidor.Start(app)
servidor(app)