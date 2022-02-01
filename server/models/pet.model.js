const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
    required: [true, "Name is required"],
    unique: [true, "Name should be unique"],
    minlength: [2, "Name must be at least 2 characters"]}
    ,
    type: {
        type: String,
    required: [true, "Type is required"],
    minlength: [2, "Name must be at least 2 characters"]
},
    desc: {
        type: String,
    required: [true, "Description is required"],
    minlength: [2, "Name must be at least 2 characters"]
},
    skill1: {type: String},
    skill2: {type: String},
    skill3: {type: String}

},{timestamps: true });

module.exports.Pet = mongoose.model("Pet", PetSchema);