const mongoose = require('mongoose');

const CardTypeSchema = new mongoose.Schema({
    name: {
        type: String,
    },

    cardsInType: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Card'
    }]
}, {timestamps: true});

module.exports.CardType = mongoose.model('CardType', CardTypeSchema);