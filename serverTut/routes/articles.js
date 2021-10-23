console.log("This is the Article Routes (i'm the controller too)");
//const express = require('express');
//const app = express.app();
const multer = require('multer');
const Articles = require('../models/articles.models');
console.log("why??")

//setup for storage with multer middleware
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './client/public/uploads');
    },
    filename: (req, file, callback) => {
        console.log(file.originalname);
        console.log('MARISA IS THE BEST!!!')
        callback(null, file.originalname);
    },
});

//multer's middleware for storage
const upload = multer({ storage: storage });

module.exports = app => {

//=========== Get === all articles ==========
app.get('/', (req, res) => {
    console.log("hi Marisa you are an angel i do not deserve you!")
    Articles.find()
    .then((article) => res.json(article))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

//=========== Post === new article ==========
app.post('/add', upload.single('articleImage'), (req, res) => {
    console.log("you are here: Add Post Control/Route")
    console.log(req.body)
    const newArticle = new Articles({
        title: req.body.title,
        article: req.body.article,
        authorname: req.body.authorname,
        articleImage: req.body.fileName,
    });

    newArticle
    .save()
    .then(() => res.json('New Article Posted!'))
    .catch((err) => res.status(400).json(`Error: ${err}`));
    console.log(newArticle);
});

//=========== Get === find article by ID ==========
app.get('/:id', (req, res) => {
    Articles.findById(req.params.id)
    .then((article) => res.json(article)) 
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

//=========== Put === update by id ==========
app.put('/update/:id', upload.single('articleImage'), (req, res) => {
    Articles.findById(req.params.id)
    .then ((article) => {
        article.title = req.body.title;
        article.article = req.body.article;
        article.authorname = req.body.authorname;
        article.articleImage = req.file.originalname;

        article.save()
        .then(() => res.json('Article Updated!'))
        .catch((err) => res.status(400).json(`Error: ${err}`));
    })
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

//=========== Delete === find by id Delete ==========
app.delete('/:id', (req, res) => {
    Articles.findByIdAndDelete(req.params.id)
    .then(() => res.json("Article Deleted!"))
    .catch((err) => res.status(400).json(`Error: ${err}`));
})

}