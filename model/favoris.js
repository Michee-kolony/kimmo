const mongoose = require('mongoose');

const favoris = mongoose.Schema({
    user_id: { type: String, required: true },
    offre_id: { type: String, required: true },
    image: { type: String, required:true },
    prix:{type:Number, require:true}
})

module.exports = mongoose.model('Favori', favoris);