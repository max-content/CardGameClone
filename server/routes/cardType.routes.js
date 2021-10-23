console.log("YOU ARE IN CARD TYPE ROUTES");

const CardTypeController = require('../controllers/cardType.controller');

module.exports = function(app) {
    app.post('/api/card/type/new', CardTypeController.createCardType);
    app.get('/api/card/type/all', CardTypeController.allCardTypes);
    app.get('/api/card/type/:id', CardTypeController.getCardType);
    app.put('/api/card/type/:id', CardTypeController.updateCardType);
    app.delete('/api/card/type/:id', CardTypeController.deleteCardType);
}