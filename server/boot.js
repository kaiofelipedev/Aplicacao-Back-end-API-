/**************************************************************
 *  Title: Configurações de inicialização do servidor
 *  Criação: 30/05/2025
 *  Autor: Kaio Felipe
 *  Versão: 1.0
 **************************************************************/

const Start = function(app){
    app.set('port', 8080)
    app.listen(app.get('port'), () => {
        console.log(`Servidor rodando em http://localhost:8080 ...`)
    })
}

module.exports = { Start }