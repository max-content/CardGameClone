console.log("I am in the Article Controller");
const { request, response } = require("express");
const { model, modelNames } = require("mongoose");
const { Article } = require("../models/articles.models");

// ==================Index Hello World =====================
module.exports.index = (request, response) => {
    console.log("Hello World Message");
    response.json({
        message: "Hello World"
    })
}

// ==================Create Route =====================
module.exports.createArticle = (request, response) => {
    const { title, article, authorname, articleImage, originalname } = request.body;
    Article.create({
        title, 
        article, 
        authorname, 
        articleImage, 
        originalname
    })
    .then(Article => response.json(Article))
    .catch(err => response.json(err));
}

// ==================Show All Articles =====================
module.exports.allArticles = (request, response) => Article.find({})
.then(Article => response.json(Article))
.catch(err => response.json(err));

// ==================Show by ID =====================
module.exports.getArticle = (request, response) => {
    Article.findOne({_id:request.params.id})
        .then(Article => response.json(Article))
        .catch(err => response.json(err))
}

// ==================Edit By ID =====================
module.exports.updateArticle = (request, response) => {
    Article.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
    .then(updatedArticle => response.json(updatedArticle))
    .catch(err => response(err))
}

// ================== Delete by ID =====================
module.exports.deleteArticle = (request, response) => {
    Article.deleteOne({_id: request.params.id})
    .then(deleteConfirmation => response.json(deleteConfirmation))
    .catch(err => response.json(err))
}

