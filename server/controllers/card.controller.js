console.log("I am the Card Controller");
const { request, response } = require("express");
const { model, modelNames } = require("mongoose");

const {Card} = require("../models/card.model");
console.log(Card);
// const { CardType } = require('../models/cardType.model');
//const { Artwork } = require('../models/artwork.model');


// const typeDict = {
//     creature: '61083cbe657afe614a7c5e24',
//     sorcery: '61083ce5657afe614a7c5e26',
//     instant: '61083d06657afe614a7c5e28',
//     enchantment: '61083d3d657afe614a7c5e2a',
//     land: '61083dbf0bee30618e7ee9b3',
//     artifact: '61083e0e7be2a961be6108a6',
//     equipment: '61083e3e7be2a961be6108a8'
// }


// ==================Index Hello World =====================
module.exports.index = (request, response) => {
    console.log("index");
    response.json({
       message: "Hello World"
    });
}

// ==================Create Card Route =====================
//setup for multer for storing uploaded files
module.exports.createCard = (req, res) => { 

    const { name, typeOfCard, rarity, flavor, artwork } = req.body;

    console.log(req.body);
    //const dictionary = typeDict[i];

    // Card.create({
    //     name: name,
    //     rarity: rarity,
    //     flavor: flavor,
    //     artwork: artwork,
    //     typeOfCard: typeOfCard,
    // })
    
    const newCard = new Card({
        name: req.body.name, 
        typeOfCard: req.body.typeOfCard, 
        rarity: req.body.rarity,
        flavor: req.body.flavor,
        artwork: req.body.artwork
        })

    newCard.save()
    .then(card => CardType.findOneAndUpdate()
    .then(somethingElse => res.json(card)))
    .catch(err => res.json(err));
}

// ==================Show All =====================
module.exports.allCards = (request, response) => { 
    Card.find({})
    .then(card=> response.json(card))
    .catch(err => response.json(err));
}


// ==================Show by ID =====================
module.exports.getCard = (request, response) => {
    Card.findOne({_id:request.params.id})
        .then(card => response.json(card))
        .catch(err => response.json(err))
}

// ==================Edit Card Route =====================
 module.exports.updateCard = (request, response) => {
     Card.findOneAndUpdate({_id: request.params.id}, request.body, {new: true})
     .then(updatedCard => response.json(updatedCard))
     .catch(err => response(err))
     console.log(updatedCard);
 }

// ==================Delete Card Route =====================
module.exports.deleteCard = (request, response) => {
    Card.deleteOne({_id: request.params.id})
    .then(deleteConfirmation => response.json(deleteConfirmation))
    .catch(err => response.json(err));
}