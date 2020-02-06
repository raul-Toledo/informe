const mongoose = require('mongoose');
//crear un objeto Schema
let Schema = mongoose.Schema;
//Definir mi colección
let EstatalSchema = new Schema({
    username:{
        type: String,
        required: [true, 'Queiro Username']
    },
    password:{
        type: String,
        required: [true, 'Queiro pass'],
        default:"123@qwerty"
    },
    firstname:{type: String},
    lastname:{type: String},
    email:{type: String}
});

module.exports = mongoose.model('Estatal',EstatalSchema);