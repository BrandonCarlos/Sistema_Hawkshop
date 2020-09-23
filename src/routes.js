//Inicio da CONFIGURAÇÃO DE ROTAS
const express = require('express');
const routes = express.Router()
const multer = require('./app/middlewares/multer')
const ProdutoController = require('./app/controllers/ProdutoController')
const HomeController = require('./app/controllers/HomeController')
const BuscarController = require('./app/controllers/BuscarController')


//Home
routes.get('/', HomeController.index)

//Buscar
routes.get('/produtos/buscar', BuscarController.index)

// Produtos
routes.get('/produtos/criar', ProdutoController.criar)

routes.get('/produtos/:id', ProdutoController.mostrar)
//Atualizar - UPDATE
routes.get('/produtos/:id/editar', ProdutoController.editar)

routes.post('/produtos', multer.array("fotos", 6), ProdutoController.salvar)

//Atualizar o produto
routes.put('/produtos', multer.array("fotos", 6), ProdutoController.atualizar)

//Excluindo o produto
routes.delete('/produtos', ProdutoController.deletar)

//Atalhos
routes.get('/ads/criar', function (req, res) {
  return res.redirect("/produtos/criar")
})

module.exports = routes