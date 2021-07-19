console.log("YOU ARE IN CARD ROUTES");

const CardController = require('../controllers/card.controller');
module.exports = function(app) {
    app.get('/api', CardController.index);
    app.post('/api/card/new', CardController.createCard);
    app.get('/api/card/all', CardController.allCards);
    app.get('/api/card/:id', CardController.getCard);
    app.put('/api/card/:id', CardController.updateCard);
    app.delete('/api/card/:id', CardController.deleteCard);
}