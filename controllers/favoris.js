const Favoris = require('../model/favoris');

exports.ajouterFavori = (req, res, next)=>{
    const favori = new Favoris({
       ...req.body
    });
    favori.save()
        .then(()=>{
            res.status(200).json({message:"Favori ajouté"})
        })
        .catch(error => {
            res.status(400).json({error})
        });
}