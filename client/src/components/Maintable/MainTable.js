import React from 'react';
import Player from "../Player/Player"

const MainTable = ({players}) => {
console.log(players.players)
    return (
        <div className={"mainTable"}>
            <h1>Black Jack</h1>
                <div className={"players"}>
                     {players.players.map((player)=>{
                      return <Player
                         name={player.name}
                         scores={player.scores}
                         cardImg={player.cardImg}
                         key={player.id}/>})
                         }
                </div>

        </div>
    );
};

export default MainTable;