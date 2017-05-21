const port = 3003

const bodyParser = require('body-parser') //Parser no corpo da requisicao
const express = require('express')        // Singleton  
const server = express()                  //instanciando express
const allowCors = require('./cors')       //Habilitando o CORS

//Converter os parametros do endereco HTTP na chamada REST quando forem numeros
//Caso contrario ele envia numero como string
const queryParser = require('express-query-int')

server.use(bodyParser.urlencoded({ extended: true })) //Para toda requisicao com urlencoded utilizar bodyparser
server.use(bodyParser.json()) //Parser quando no corpo da requisicao vier um Json
server.use(allowCors) //Usar o midleware do CORS
server.use(queryParser())

server.listen(port, function() {
    console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server