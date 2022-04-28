const Router = require("@koa/router");
const Game = require("../game/game");
const Player = require("../game/player");


const router = new Router();

let game = new Game([new Player(), new Player(), new Player()])

router.get('/api/game', (ctx) => {
    // console.log([game.activePlayer.cardImg])
    // console.log([game.activePlayer.name])
    ctx.body = {Player: game.activePlayer.name, scores: game.activePlayer.scores, cards: game.activePlayer.cards}
})

router.post('/api/stand', (ctx) => {
    game.stand();
    // console.log([game.activePlayer.cardImg])
    // console.log([game.activePlayer.name])
    ctx.body = {Player: game.activePlayer.name, scores: game.activePlayer.scores, cards: game.activePlayer.cards};
})

router.post('/api/hit', (ctx) => {
    game.hit();
    // console.log([game.activePlayer.cardImg])
    // console.log([game.activePlayer.name])
    ctx.body = {Player: game.activePlayer.name, scores: game.activePlayer.scores, cards: game.activePlayer.cards};
})

router.post('/api/reset', (ctx) => {
    game = new Game([new Player(), new Player(), new Player()]);
    ctx.body = {Player: game.activePlayer.name, scores: game.activePlayer.scores, cards: game.activePlayer.cards};
})

module.exports = router