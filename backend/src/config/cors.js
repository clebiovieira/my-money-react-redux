module.exports = (req, res, next) => {
    //Permitir varias origens de requisição
    res.header('Access-Control-Allow-Origin', '*')
    //Metodos permitidos
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    //Headers permitidos
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    
    //Todo midleware precisa do next para que os proximos midlewares sejam chamados
    // e nao pare o servidor.
    next()
    //Ou vc chama next() ou devolve uma response, mensagem de erro...
}