/**************************************************************
 *  Title: Arquivo principal do projeto 'DESENHOS_API'
 *  Criação: 30/05/2025
 *  Autor: Kaio Felipe
 *  Versão: 1.0
 **************************************************************/

// Import dos módulos 'express', 'cors' e 'body-parser
const Express    = require('express')
const cors       = require('cors')
const bodyParser = require('body-parser')

// Import de arquivos
const servidor   = require('./server/boot.js')
const controller = require('./controller/controlador.js')

// Instância do módulo 'Express' e 'bodyParser'
const app = Express()
const bodyParserJson = bodyParser.json()

// EndPoints

// GET: retorna todos os registros // OK
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


// POST: inserir um novo registro // OK
app.post('/v1/api-desenhos/personagem',
    cors({origin: '*', methods: 'POST'}), bodyParserJson,
    async (req, res) => {

        // Variável que recebe os dados do body da requisição
        let personagem = req.body

        // Aciona o controller
        let saida = await controller.insertNew(personagem)

        // Resposta para o usuário
        app.set('json spaces', 2)
        res.status(saida.statusCode)
        res.json(saida)
    }
)


// PUT: atualizar um registro existente // OK
app.put('/v1/api-desenhos/personagem/:id',
    cors( {origin: '*', methods: 'PUT'} ), bodyParserJson,
    async (req, res) => {

        // Armazena o ID inserido pelo usuário
        let idRegistro = req.params.id

        // Armazena os dados enviados no body da requisição
        let dados = req.body

        // Encaminha os dados para a controller e guarda a rsposta
        let saida = await controller.atualizarPersonagem(idRegistro, dados)

        // Resposta para o usuário
        app.set('json spaces', 2)
        res.status(saida.statusCode)
        res.json(saida)
    }
)

// Teste de conexão
// servidor.Start(app)
servidor(app)