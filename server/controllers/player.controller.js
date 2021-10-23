console.log("I am the Player Controller");
const { request, response } = require("express");
const { model, modelNames } = require("mongoose");
const { Pet } = require("../models/player.model");

// ==================Index Hello World =====================
module.exports.index = (request, response) => {
    response.json({
       message: "Hello World"
    });
}

// ==================Create Player Route =====================


// ==================Show Player Route =====================


// ==================Edit Player Route =====================


// ==================Delete Player Route =====================

