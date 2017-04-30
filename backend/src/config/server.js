const port = 3003

const bodyParser = require('body-parser') //Parser no corpo da requisicao
const express = require('express')        // Singleton  
const server = express()                  //instanciando express
//const allowCors = require('./cors')
//const queryParser = require('express-query-int')

server.use(bodyParser.urlencoded({ extended: true })) //Para toda requisicao com urlencoded utilizar bodyparser
server.use(bodyParser.json()) //Parser quando no corpo da requisicao vier um Json
//server.use(allowCors)
//server.use(queryParser())

server.listen(port, function() {
    console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server