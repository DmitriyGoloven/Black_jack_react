import {useEffect} from "react";
import React from 'react';
import ButtonTable from "../Buttontable/ButtonTable";
import MainTable from "../Maintable/MainTable";
import Modal from "../Modal/Modal";



const Game = ({getNewGame,hit,stand,gameState, reset}) => {

    useEffect(() => {
        getNewGame();
    }, [reset])

    if (!gameState)
        return

console.log(gameState.winner)

    return (
            <div className={"table"}>
                <MainTable state={gameState}/>
                <ButtonTable onClick={hit} offClick={stand} andClick={reset}/>
                <Modal winner={gameState.winner} onclick={reset}/>
            </div>
    );
};

export default Game;

