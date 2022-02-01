const PetController = require('../controllers/pet.controller');

module.exports = function(app){
    app.post('/api/pet', PetController.createPet);
    app.get('/api/pet', PetController.getAllPets);
    app.get('/api/pet/:id', PetController.getOne);
    app.put('/api/pet/:id', PetController.updatePet)
    app.delete('/api/pet/:id', PetController.deletePet)
    
}