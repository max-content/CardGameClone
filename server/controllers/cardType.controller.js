console.log("I am the Card TYPE Controller");
const { request, response } = require("express");
const { model, modelNames } = require("mongoose");

const { CardType } = require("../models/cardType.model");

// ==================Create Route =====================
module.exports = {
    createCardType: (req, res) => {
        CardType.create(req.body) 
        .then(cardType => res.json(cardType))
        .catch(err => res.json(err));
    }
}

// ==================Show All =====================
module.exports.allCardTypes = (request, response) => { CardType.find({})
    .then(cardType => response.json(cardType))
    .catch(err => response.json(err));
}

// ==================Show by ID =====================
module.exports.getCardType = (request, response) => {
    CardType.findOne({_id:request.params.id})
        .then(cardType => response.json(cardType))
        .catch(err => response.json(err))
}

// ==================Edit By ID =====================
module.exports.updateCardType = (request, response) => {
    CardType.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
    .then(updatedCardType => response.json(updatedCardType))
    .catch(err => response(err))
    console.log(updatedCardType);
}

// ================== Delete by ID =====================
module.exports.deleteCardType= (request, response) => {
    CardType.deleteOne({_id: request.params.id})
    .then(deleteConfirmation => response.json(deleteConfirmation))
    .catch(err => response.json(err))
}