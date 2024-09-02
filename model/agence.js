const mongoose = require('mongoose');
const uniquevalidator = require('mongoose-unique-validator');

const agenceshema = mongoose.Schema({
     nom : {type:String, required:true},
     email : {type:String, required:true, unique:true},
     password : {type:String, required:true},
     adresse:{type:String},
     rccm: {type:String},
})

agenceshema.plugin(uniquevalidator);

module.exports = mongoose.model('Agence', agenceshema);