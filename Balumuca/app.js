const express = require('express')
//const handlebars = require('express-handlebars')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const admin = require('./routes/admin')//buscar grupo d arquivo pra usar aqui. Abaixo vai definir apenas as tais rotas
const path = require('path') //pra manipular as pastas
const  expressHbs = require('express-handlebars')

const app = express()

//BodyParser
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//Definindo a tecnolgia do template usado, q eh o HANDLEBARS
//app.engine(' handlebars', handlebars({defaultLayout: 'main'}))
app.engine('.hbs', expressHbs({defaultLayout: 'main', extname: '.hbs'}))
app.set('view engine', 'hbs')

//Punlic


//Mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/balumuca_db', {
    useMongoClient: true
}).then(() => {
    console.log('MongoDB conectado!');
}).catch((err) => {
    console.log('Erro ao conectar a MongoDB' + err);
});


//Publc
app.use(express.static(path.join(__dirname, 'public')))
//app.set('views', path.join(__dirname, 'views'))


//Rotas
/* Definir as tais Rotas */
app.use('/admin', admin)

app.listen(8888, () => {
    console.log('Servidor xta de pe na porta 8888');
});