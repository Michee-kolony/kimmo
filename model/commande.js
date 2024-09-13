const mongoose = require('mongoose');

const commandeshema = mongoose.Schema({
    nom : {type:String, required:true},
    email: {type:String, required:true},
    telephone: {type:String, required:true},
    titre : {type:String, required:true},
    prix: {type:String, required:true},
    image : {type:String, required:true},
    pays:{type:String, required:true},
    user_id: {type:String, required:true},
    createdate:{type:Date, default: Date.now()}
})

module.exports = mongoose.model('commande', commandeshema);