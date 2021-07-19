const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema({
    // name: {
    //     type: String,
    //     required: true,
    // },

    // type: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'CardType',
    //     required: true,
    // },

    // rating: {
    //     type: String,
    //     enum: ['common', 'uncommon', 'rare', 'mythic rare'],
    //     default: 'common'

    // },

    // flavor: {
    //     type: String,
    // },

    // artwork: {
    //     name: String,
    //     artist: String,
    //     img: {
    //         data: Buffer, //type for parsing image as an array
    //         contnetType: String
    //     }
    // },
    
    img: {
        data: Buffer, //type for parsing image as an array
        contnetType: String
    }


}, {timestamps: true});

//CardSchema.index( { name: 1, type: -1}); //this should create an index position for each game

module.exports.Card = mongoose.model('Card', CardSchema);