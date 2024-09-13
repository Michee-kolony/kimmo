const Commande = require('../model/commande');

exports.publie = (req, res, next)=>{
    const commande = new Commande({
        ...req.body
    })
    commande.save()
            .then(()=>res.status(200).json({message:"commande envoyé"}))
            .catch(err => res.status(400).json({err}));
}

exports.getall = (req, res, next)=>{
    Commande.find()
            .then(data=> res.status(200).json(data))
            .catch(err => res.status(400).json({err}));
}

exports.getone = (req, res, next)=>{
    Commande.findOne({_id:req.params.id})
            .then(data=> res.status(200).json(data))
            .catch(err => res.status(400).json({err}));
}

exports.deleteone = (req, res, next)=>{
    Commande.deleteOne({_id:req.params.id})
            .then(()=>res.status(204).json({message:"Commande supprimé"}))
            .catch(err =>res.status(400).json({err}));
}