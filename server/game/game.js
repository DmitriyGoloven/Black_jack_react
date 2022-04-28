const Card = require("./card")
const Player = require("./player")


class Game {
    losers = []
    winners = []


    constructor(players) {
        this.players = players
        this.activePlayer = null
        this.cardDeck = Card.shuffle()
        this.addPlayer(players)
    }


    addPlayer(players) {
        for (let i = 0; i < this.players.length; i++) {
            this.players[i].game = this;
            this.players[i].giveFirstCards();
            this.players[i].id = [i]
        }
        this.activePlayer = players[0]
    }


    hitButton() {
        if (this.activePlayer.scores > 21) {
            this.losers.push(this.activePlayer)
            this.nextPlayer()
        } else if (this.activePlayer.scores === 21) {
            this.winners.push(this.activePlayer)
            this.nextPlayer()
        }
        this.activePlayer.hit();

    }


    standButton() {
        if (this.activePlayer.scores <= 21) {
            this.winners.push(this.activePlayer)
            this.nextPlayer()
        }
    }
    checkWinner() {

        if (this.winners.length === 0) {
            console.log( "NO winners")
        } else {
            let scoreWinners = this.winners.map((player) => {
                return player.scores
            })

            let winner = scoreWinners.indexOf(Math.max(...scoreWinners))
            console.log(`${this.winners[winner].name}` + ' WINNER')


        }
    }
    nextPlayer() {
        if ((this.players.indexOf(this.activePlayer) + 1) !== this.players.length) {
            this.activePlayer = this.players[this.players.indexOf(this.activePlayer) + 1];
        } else {
            this.checkWinner()
            this.activePlayer.game = null
        }
    }
}

module.exports = Game

let game = new Game([new Player(), new Player(), new Player()])




