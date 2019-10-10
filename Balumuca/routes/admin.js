/* //AQui sra guardada tds rotas do admin// */

const express = require('express')
const routes = express.Router()
const mongoose = require('mongoose')
require('../models/categoria') //Carregar o mudulo da pasta q cootem ficheiro (categoria.js) responsavel pela BD MONGO
const Categoria = mongoose.model('categoria')/*vai passar referencia da 'categoria' p/ varcategoria'avel Categoria. 'categoria'
 veio da ficheiro categoria.js na dentro da pasta model*/


//criar rotas
routes.get('/', (req, res)=> {
    res.render('admin/index')
})

routes.get('/posts', (req, res) => {
    res.render('admin/posts')
})

routes.get('/categorias', (req, res) => {
    res.render('admin/categorias')
})

routes.get('/categorias/add', (req, res) => {
    res.render('admin/addcategorias')
})

/*rota (abaxo) responsavel por cadastrar usuario o BD mongo. Ela va//rota responsavel por cadastrar usuario o BD mongo. Elareceber os dados
do formulario (atraves d body-parser) e vai add no mongo */
routes.post('/categorias/nova', (req, res) => { 
    const novaCategoria = { //novaCategoria = objecto q recebe e guarda os valores vindo do formulario (nome e slug)
        nome: req.body.nome, //.nome = refere o elemento q xta nos campo do formulario <input ... name='nome' ...>
        slug: req.body.slug  // <input ... name='slug' ...>
    }

    //Ja foi recebiso agora falta 'Salvar' a tal categoria
    new Categoria(novaCategoria).save().then(() =>{
        console.log('Categorva salva com sucesso!!')
    }).catch((err) =>{
        console.log('Erro ao salvar a categoria!!')
    })
})

module.exports = routes; //Exportar 'routes' p/ o 'app.js'