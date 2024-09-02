const Offres = require('../model/offres');

exports.publie = (req, res, next)=>{
    const offre = new Offres({
        ...req.body
    });
    offre.save()
         .then(()=>{
            res.status(200).json({message:"Offres oublié"})
         })
         .catch(error => {
            res.status(400).json({error})
         });
}
exports.getall = (req, res, next)=>{
    Offres.find()
          .then(data => 
            res.status(200).json(data)
          )
          .catch(error => 
             res.status(400).json({error})
          );
}

exports.getone = (req, res, next)=>{
    Offres.findOne({_id:req.params.id})
          .then(data => 
             res.status(200).json(data)
          )
          .catch(error => 
             res.status(400).json({error})
          );
}

exports.update = (req, res, next)=>{
    Offres.updateOne({_id:req.params.id},{...req.body, _id:req.params.id})
          .then(() => 
             res.status(200).json({message:"Offre modifiée"})
          )
          .catch(error => 
             res.status(400).json({error})
          );
}

exports.deleteone = (req, res, next)=>{
    Offres.deleteOne({_id:req.params.id})
          .then(() => 
             res.status(200).json({message:"Offre supprimée"})
          )
          .catch(error => 
             res.status(400).json({error})
          );
}
