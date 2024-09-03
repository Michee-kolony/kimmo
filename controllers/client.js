const Client = require('../model/client');
const bcrypt = require('bcrypt');

exports.register = (req, res, next)=>{
    bcrypt.hash(req.body.password, 10)
          .then(hash =>{
             const client = new Client({
                nom:req.body.nom,
                email:req.body.email,
                password:hash
             })
             client.save()
                   .then(()=>{res.status(200).json({message:"Votre compte a bien été crée"})})
                   .catch(error => { res.status(401).json({error})});
            })
          .catch(error => res.status(500).json({error}))
}