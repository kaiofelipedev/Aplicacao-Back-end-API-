/**************************************************************
 *  Title: Configurações de inicialização do servidor
 *  Criação: 30/05/2025
 *  Autor: Kaio Felipe
 *  Versão: 1.0
 **************************************************************/

<<<<<<< HEAD
module.exports = (app) => {
=======
const Start = function(app){
>>>>>>> 40dd87e (Criação do boot.js.31/05/2025)
    app.set('port', 8080)
    app.listen(app.get('port'), () => {
        console.log(`Servidor rodando em http://localhost:8080 ...`)
    })
<<<<<<< HEAD
}
=======
}

module.exports = { Start }
>>>>>>> 40dd87e (Criação do boot.js.31/05/2025)
