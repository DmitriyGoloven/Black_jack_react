import {handleActions} from "redux-actions";
import {getNewGame, hit, stand, reset} from "./actions";

const defaultState = null

const getGameDta = (state, {payload}) => {
    const {players, activePlayer, winner} = payload.data;
    return {
        ...state,
        players: players,
        activePlayer: activePlayer,
        winner: winner
    }
}
export const reducer = handleActions({
    [getNewGame.success]: getGameDta,
    [hit.success]: getGameDta,
    [stand.success]: getGameDta,
    [reset.success]: getGameDta

}, defaultState)

export default reducer;

