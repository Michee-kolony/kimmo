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

exports.getfavoris = (req, res, next) => {
    Favoris.find()
       .then(data => {
            res.status(200).json(data)
        })
       .catch(error => {
            res.status(400).json({error})
        });
}

exports.deletefavoris = (req, res, next) => {
    Favoris.deleteOne({_id:req.params.id})
          .then(() => {
             res.status(200).json({message:"Favori supprimé"})
          })
          .catch(error => {
             res.status(400).json({error})
          });
}

exports.getone = (req, res, next) => {
    Favoris.findOne({_id:req.params.id})
       .then(data => {
            res.status(200).json(data)
        })
       .catch(error => {
            res.status(400).json({error})
        });
}