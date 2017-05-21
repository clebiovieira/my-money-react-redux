const _ = require('lodash')

//Retornar um Midleware, no padrao Express(req,res,next)
module.exports = (req, res, next) => {
    //Os erros da aplicação estao no bundle do response do express
    const bundle = res.locals.bundle

    if(bundle.errors) {
        const errors = parseErrors(bundle.errors)
        res.status(500).json({errors})
    } else {
        //para ir para o próximo midleware da cadeia
        //Sempre necessario quando trabalho com manipulação do midleware
        next()
    }
}

const parseErrors = (nodeRestfulErrors) => {
    const errors = [] //Um array constante pode receber novos elementos
    
    //For in com callback, pegando os objetos de erro que vem do bundle
    //e adicionando os erros nos array para ser retornado.
    _.forIn(nodeRestfulErrors, error => errors.push(error.message))
    
    return errors 
}