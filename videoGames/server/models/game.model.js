const mongoose = require('mongoose')

const GameSchema = mongoose.Schema({
    title: {
        type: String, 
        minLength: [2, 'Video game title must be more than 2 characters'],
        required: [True, 'Pirate name is required']
    }, 
    image: {
        type: String,
        required: [True, 'Video game must have an image']
    },
    console: {
        type: String,
        minLength: [1, 'Console name must be longer than 1 character'],
        required: [True, 'Video game console is required']
    },
    description: {
        type: String, 
        minLength: [2, 'Description must be longer than 2 characters'],
        required: [True, 'Must have a description']
    }
}, {timestamps:true})

const Game = mongoose.model('Game', GameSchema)

module.exports = Game