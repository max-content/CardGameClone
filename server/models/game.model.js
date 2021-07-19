const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
    name: {
        type: String,
    },

    playerOne: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Player'
    }],

    playerTwo: [{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Player'
    }],

}, {timestamps: true});

GameSchema.index( { name: 1, type: -1}); //this should create an index position for each game

module.exports.Game = mongoose.model('Game', GameSchema);