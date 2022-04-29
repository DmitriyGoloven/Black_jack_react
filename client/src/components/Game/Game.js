import {useEffect} from "react";
import React from 'react';
import ButtonTable from "../Buttontable/ButtonTable";
import MainTable from "../Maintable/MainTable";

const Game = ({getNewGame,players}) => {

    useEffect(() => {
        getNewGame();
    }, [])

    return (
            <div className={"table"}>
                <MainTable/>
                <ButtonTable/>
            </div>
    );
};

export default Game;