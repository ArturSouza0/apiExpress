const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const BancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (req, res, next) => {
    res.send(BancoDeDados.getProdutos()) //converter para Json

})

app.get('/produtos/:id', (req, res, next) => {
    res.send(BancoDeDados.getProdutos(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = BancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //gera um Json
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = BancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //gera um Json
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = BancoDeDados.deleteProduto(req.params.id)
    res.send(produto) //gera um Json
})

app.listen(porta, () => {
    console.log(`Servidor sendo executado na porta ${porta}.`)
})
