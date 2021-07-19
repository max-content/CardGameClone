console.log("I am the Card Controller");
const { request, response } = require("express");
//const { model, modelNames } = require("mongoose");
const { Card } = require("../models/card.model");

// ==================Index Hello World =====================
module.exports.index = (request, response) => {
    response.json({
       message: "Hello World"
    });
}

// ==================Create Card Route =====================
//setup for multer for storing uploaded files
module.exports.createCard = (req, res) => {
    const multer = require('multer');
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, 'uploads/')
        }
    });

    const upload = multer( { storage: storage });

    router.route('/img_data')
    .post(upload.single('file'), function(req, res){
        const newCard = new Card;
        newCard.img.data = fs.readFileSync(req.file.path)
        newCard.img.contentType = 'image/png';
        newCard.save();
        
        res.json({ message: 'New image added to the db!'});
    }).get = (req, res) => {
        Card.findOne({}, 'img createdAt', (err, items) => {
            if(err)
                res.send(err);
                res.contentType('json');
                res.send(img);
        }).sort({ createdAt: 'desc'});
    }
}
// ==================Show Card Route =====================
module.exports.allCards = (request, response) => Card.find({})
    .then(card => response.json(card))
    .catch(err => response.json(err));


// ==================Edit Card Route =====================


// ==================Delete Card Route =====================

