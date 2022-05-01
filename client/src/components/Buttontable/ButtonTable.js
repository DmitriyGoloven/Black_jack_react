import React from 'react';

const ButtonTable = ({onClick,offClick,andClick}) => {
    return (
        <div className={"buttonTable"}>
            <h2 >Cards</h2>
            <div className={"panel"}>
                <img className={"img"} src="https://kartinkin.net/uploads/posts/2021-07/1626967022_30-kartinkin-com-p-fon-dlya-rubashki-kart-krasivo-35.jpg" alt={"Card deck"}/>
                <button className={"hit"} onClick={onClick}>HIT</button>
                <button className={"stand"} onClick={offClick}>STAND</button>
                <button className={"stand"} onClick={andClick}>new game</button>
            </div>
        </div>

    );
};

export default ButtonTable;