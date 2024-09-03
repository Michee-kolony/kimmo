const mongoose = require('mongoose');

const uniquevalidator = require('mongoose-unique-validator');
const clientshema = mongoose.Schema({
    nom : {type:String, required:true},
    email : {type:String, required:true, unique :true},
    password: {type:String, required:true},
})

clientshema.plugin(uniquevalidator);

exports.module = mongoose.model('client', clientshema);