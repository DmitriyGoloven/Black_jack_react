import {useEffect} from "react";
import React from 'react';
import ButtonTable from "../Buttontable/ButtonTable";
import MainTable from "../Maintable/MainTable";



const Game = ({getNewGame,hit,stand,gameState, reset}) => {

    useEffect(() => {
        getNewGame();
    }, [reset])

    if (!gameState)
        return



    return (
            <div className={"table"}>
                <MainTable state={gameState}/>
                <ButtonTable onClick={hit} offClick={stand} andClick={reset}/>


            </div>
    );
};

export default Game;

