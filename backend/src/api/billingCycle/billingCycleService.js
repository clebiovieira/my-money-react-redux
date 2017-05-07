const BillingCycle = require('./billingCycle')
//const errorHandler = require('../common/errorHandler')

BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({new: true, runValidators: true}) //Roda as validações quando em PUT e tambem devolve um objeto novo
//BillingCycle.after('post', errorHandler).after('put', errorHandler)

//Criando uma rota para contar os elementos da coleção
BillingCycle.route('count', (req, res, next) => {
    BillingCycle.count((error, value) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json({value})
        }
    })
})


BillingCycle.route('summary', (req, res, next) => {
    //Estudar Pipeline de Agregação
    BillingCycle.aggregate({
        //Comando do MongoDB
        $project: {credit: {$sum: "$credits.value"}, debt: {$sum: "$debts.value"}}
    }, {
        //Agrupando no mongodb
        $group: {_id: null, credit: {$sum: "$credit"}, debt: {$sum: "$debt"}}
    }, {
        $project: {_id: 0, credit: 1, debt: 1}
    }, (error, result) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json(result[0] || { credit: 0, debt: 0 })
        }
    })
})

module.exports = BillingCycle