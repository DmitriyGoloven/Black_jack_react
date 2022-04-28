import React from 'react';

const Game = () => {


console.log('hi')
    return (
        <div>
            <div className={"table"}>
                <main className={"mainTable"}>
                    <h1>Black Jack</h1>
                    <div  className={"players"}>
                    </div>
                </main>
                <aside className={"buttonTable"}>
                    <h2 >Cards</h2>
                    <div className={"panel"}>
                        <img className={"img"} src="https://w7.pngwing.com/pngs/829/358/png-transparent-bicycle-playing-cards-standard-52-card-deck-ace-united-states-playing-card-company-suit-game-bicycle-toy-thumbnail.png" alt={"Card deck"}/>
                            <button className={"hit"}>HIT</button>
                            <button className={"stand"}>STAND</button>
                    </div>
                </aside>
            </div>

        </div>
    );
};

export default Game;