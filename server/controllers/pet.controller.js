const req = require('express/lib/request');
const {Pet}  = require ('../models/pet.model');
//C
module.exports.createPet = (request, response) =>{
    const { name, type , desc, skill1, skill2, skill3 } = request.body;
    Pet.create({
        name,
        type,
        desc,
        skill1,
        skill2,
        skill3
    })
    .then(person=>response.json(person))
    .catch(err=>response.status(400).json(err))
}
//R
module.exports.getAllPets = (request, response) =>{
    Pet.find().sort({type:1, name: 1})
    .then(product=>response.json(product))
    .catch(err=>response.status(400).json(err))
}

module.exports.getOne = (req, res) =>{
    Pet.findOne({_id: req.params.id})
    .then(product=>res.json(product))
    .catch(err=>res.json(err))
}

//U

module.exports.updatePet = (request, response) =>{
    Pet.findOneAndUpdate(
        {_id: request.params.id},
        request.body,
        {new: true, runValidators: true}
    )
    .then(product=>response.json(product))
    .catch(err=>response.status(400).json(err))
}

//D

module.exports.deletePet = (req, res) =>{
    Pet.deleteOne({_id: req.params.id})
    .then(deleteConf => res.json(deleteConf))
    .catch(err=>res.json(err))
}