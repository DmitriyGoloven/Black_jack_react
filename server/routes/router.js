const Router = require("@koa/router");
const Game = require("../game/game");
const Player = require("../game/player");

const router = new Router();

let game = new Game([new Player(), new Player(), new Player()])

router.get('/api/game', (ctx) => {
    ctx.body = game
})

router.post('/api/stand', (ctx) => {
    game.stand();
    ctx.body = game
})

router.post('/api/hit', (ctx) => {
    game.hit();
    ctx.body = game
})

router.post('/api/reset', (ctx) => {
    game = new Game([new Player(), new Player(), new Player()]);
    ctx.body = game;
})

module.exports = router