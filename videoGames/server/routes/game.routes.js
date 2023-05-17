const GameController = require('../controllers/game.controllers')


module.exports = (app) => {
    app.post('/api/create', GameController.create)
    app.get('/api/allGames', GameController.allGames)
    app.get('/api/oneGame/:id', GameController.oneGame)
    app.delete('/api/delete/:id', GameController.deleteGame)
    app.put('/api/update/:id', GameController.update)
}