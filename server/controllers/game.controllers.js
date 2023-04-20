const Game = require('../models/game.model')

const create = (req, res)=> {
    Game.create(req.body)
    .then((result)=>{
        res.json(result)
    }).catch((err)=>{
        res.status(400).json(err)
    })
}

const allGames = (req, res)=> {
    Game.find(req.body)
    .then((result)=>{
        res.json(result)
    }).catch((err)=>{
        res.status(400).json(err)
    })
}

const oneGame = (req, res)=> {
    Game.findById(req.params.id)
    .then((result)=>{
        res.json(result)
    }).catch((err)=>{
        res.status(400).json(err)
    })
}

const deleteGame = (req, res)=>{
    Game.deleteOne({_id:req.params.id})
    .then((result)=>{
        res.json(result)
    }).catch((err)=>{
        res.status(400).json(err)
    })
}

const update = (req, res)=> {
    Game.updateOne({_id:req.params.id}, req.body, {new:true, runValidators:true})
    .then((result)=>{
        res.json({result})
    }).catch((err)=>{
        res.status(400).json(err)
    })
}

module.exports = {
    create,
    allGames,
    oneGame,
    deleteGame,
    update
}