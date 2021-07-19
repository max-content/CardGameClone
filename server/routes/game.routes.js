console.log("YOU ARE IN GAME ROUTES");

const GameController = require('../controllers/game.controller');
module.exports = function(app) {
    app.get('/api', GameController.index);
    app.post('/api/game/new', GameController.createGame);
    // app.get('/api/game/all', GameController.allGames);
    // app.get('/api/game/:id', GameController.getGame);
    // app.put('/api/game/:id', GameController.updateGame);
    app.delete('/api/game/:id', GameController.deleteGame);
}