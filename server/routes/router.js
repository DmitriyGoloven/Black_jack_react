const Router = require("@koa/router");
const Game = require("../game/game");
const Player = require("../game/player");


const router = new Router();

let game = new Game([new Player(), new Player(), new Player()])

router.get('/game', (ctx) => {
    console.log([game.activePlayer.cardImg])
    ctx.body = game.cardDeck
})

router.post('/game', (ctx) => {
    ctx.body = {
        name: "vova"
    } ;
})

module.exports = router