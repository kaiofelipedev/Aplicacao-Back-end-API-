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
const servidor   = require('./server/boot.js')
const controller = require('./controller/controlador.js')

// Instância do módulo 'Express'
const app = Express()

// EndPoints

// GET: retorna todos os registros
app.get('/v1/api-desenhos/personagem',
    cors( {origin: '*', methods: 'GET'} ),
    async (req, res) => {

        // Encaminha a requisição para o arquivo 'Controller' e guarda a resposta
        let saida = await controller.allPersonagens()

        // Resposta da API
        app.set('json spaces', 2)
        res.status(saida.statusCode)
        res.json(saida)
    }
)

// Teste de conexão
// servidor.Start(app)
servidor(app)