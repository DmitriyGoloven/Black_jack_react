import {handleActions} from "redux-actions";
import {getNewGame,hit,stand,reset} from "./actions";


const defaultState = null

export const reducer = handleActions({

    [getNewGame.success]: (state, {payload}) => {
        const {players, activePlayer,winner} =  payload.data;
        return {
            ...state,
            players: players,
            activePlayer: activePlayer,
            winner: winner
        }
    },
    [hit.success]: (state, {payload}) => {
        const {players, activePlayer,winner} =  payload.data;

        return {
            ...state,
            players: players,
            activePlayer: activePlayer,
            winner: winner
        }
    },
    [stand.success]: (state, {payload}) => {
        const {players, activePlayer,winner} =  payload.data;

        return {
            ...state,
            players: players,
            activePlayer: activePlayer,
            winner: winner
        }
    },
    [reset.success]: (state, {payload}) => {
        const {players, activePlayer,winner} =  payload.data;

        return {
            ...state,
            players: players,
            activePlayer: activePlayer,
            winner: winner
        }
    }


}, defaultState)

export default reducer;

