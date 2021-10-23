console.log("YOU ARE IN CARD ROUTES");
const multer = require('multer');

//=============== Multer Setup ====================
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './client/public/artUploads');
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname);
    },
});

const upload = multer({ storage: storage });

const CardController = require('../controllers/card.controller');

module.exports = function(app) {
    app.get('/api', CardController.index);
    // app.post('/api/card/new', upload.single('imageFile'), CardController.createCard);
    app.post('/api/card/new', CardController.createCard);
    app.get('/api/card/all', CardController.allCards);
    app.get('/api/card/:id', CardController.getCard);
    app.put('/api/card/:id', upload.single('imageFile'), CardController.updateCard);
    app.delete('/api/card/:id', CardController.deleteCard);
}