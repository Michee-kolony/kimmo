const mongoose = require('mongoose');

const offreshema = mongoose.Schema({

    titre : {type : String, required : true},
    prix : {type: Number, required:true},
    categorie : {type: String, required:true},
    description : {type: String, required:true},
    image : {type:String, required:true},
    localisation:{type:String, required:true},
    user_id : {type:String, required:true},
    createdate:{type:Date, default: Date.now()}

})

module.exports = mongoose.model('offres', offreshema);