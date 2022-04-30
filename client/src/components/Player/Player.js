import React from 'react';


const Player = ({name, scores, cardImg}) => {


    return (
        <div>
            <p>{name}</p>
            <div className={"player"}>
                <p>SCORES: {scores}</p>
                <p className={"'cardImg'"}>CARDS:<br/><br/>{cardImg}</p>
            </div>
        </div>
    );
};

export default Player;