console.log("I am the Pet Controller");
const { request, response } = require("express");
const { model, modelNames } = require("mongoose");
const { Pet } = require("../models/game.model");

// ==================Index Hello World =====================
module.exports.index = (request, response) => {
    response.json({
       message: "Hello World"
    });
}

// ==================Create Game Route =====================


// ==================Delete Game Route =====================