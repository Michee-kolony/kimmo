const Client = require('../model/client');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.registerClient = (req, res, next)=>{
   bcrypt.hash(req.body.password, 10)
   .then(hash => {
       const client = new Client({
           nom : req.body.nom,
           email : req.body.email,
           pays: req.body.pays,
           password:hash
       })
       client.save()
           .then(()=>res.status(200).json({message : 'Votre compte a bien été crée sur Kimmo'}))
           .catch(err =>res.status(400).json({message:"Un autre compte utilise déja cette adresse email"}));
   })
   .catch(err=>{res.status(500).json({err})});
}

exports.loginClient = (req, res, next)=>{
    Client.findOne({email:req.body.email})
        .then(user=>{
            if(user === null){
                res.status(404).json({message : "Paire de clés incorrecte"});
            }
            else{
                bcrypt.compare(req.body.password, user.password)
                       .then(valid =>{
                            if(!valid){
                            res.status(401).json({message : "Paire de clés incorrecte"});
                            }
                            else{
                                res.status(200).json({
                                    userId:user._id,
                                    Token : jwt.sign(
                                        {userId : user._id}, 
                                        'RANDOM_TOKEN_SECRET',
                                        {expiresIn : '24H'}
                                    ),
                                    nom:user.nom,
                                    email:user.email,
                                    pays:user.pays,
                                    createdate:user.createdate
                                
                                });
                            }
                       })
                       .catch(err => res.status(400).json({error : "une erreur 400"}));
            }
        })
        .catch(error=>
            res.status(500).json({error: error})
        )
};