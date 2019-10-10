const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Categoria = new Schema({
    nome:{
        type: String,
        required: true
    },
    Slug:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now()
    }
})

mongoose.model('categoria', Categoria)