import React from 'react';


const Player = ({name, scores, cardImg,id,activeId}) => {

    return (
        <div>
            <p>{name}</p>
            <div className= {id[0]===activeId[0] ? "player player_active" :"player"}>
                <p className={"cardImg"}>{cardImg}</p>
                <p>SCORES: {scores}</p>
                <p className={"cardImg2"}>{cardImg}</p>
                {/*<p className={"'cardImg'"}>CARDS:<br/><br/>{cardImg}</p>*/}
            </div>
        </div>
    );
};

export default Player;