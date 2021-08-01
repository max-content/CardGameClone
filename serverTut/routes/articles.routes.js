console.log("This is the Article Routes");
const express = require('express');
//const router = express.Router();
const multer = require('multer');
const Articles = require('../models/articles');
const ArticleController = require("../controllers/articles.controller");

//setup for storage with multer middleware
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './client/public/uploads');
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname);
    },
});

const upload = multer({ storage: storage });

module.exports = function(app) {
    app.get('/api', ArticleController.index);
    app.post('/api/articles/new', upload.single('articleImage'), ArticleController.createArticle);
    app.get('/api/articles/all', ArticleController.allArticles);
    app.get('/api/articles/:id', ArticleController.getArticle);
    app.put('/api/articles/:id', ArticleController.updateArticle);
    app.delete('/api/articles/:id', ArticleController.deleteArticle);
}