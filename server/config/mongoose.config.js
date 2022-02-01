const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/petshelter', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    
    .then(()=> console.log("Database connection estabilished :)"))
    .catch(err=> console.log("There was an error", err))