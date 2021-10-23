console.log('THIS IS THE CARD MODEL');
const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    rarity: {
        type: String,
        enum: ['common', 'uncommon', 'rare', 'mythic rare'],
        default: 'common'
        
    },
    
    flavor: {
        type: String,
    },
    
    artwork: {
        type: String,
    },

     typeOfCard: {
        type: String,
        enum: ['creature', 'sorcery', 'instant', 'enchantment', 'land', 'artifact', 'equipment'],
        default: 'creature'
    },
    
}, {timestamps: true});

//CardSchema.index( { name: 1, type: -1}); //this should create an index position for each game

module.exports.Card = mongoose.model('Card', CardSchema);