import {handleActions} from "redux-actions";
import {getNewGame} from "./actions";



const defaultState = {
    players: null,
    loading: false,
    fetched: false,

}

export const reducer = handleActions({
    [getNewGame]: (state, {payload}) => {
        return {
            ...state,
            loading: true
        }
    },
    [getNewGame.success]: (state, {payload}) => {
        console.log(payload.data)
        const players = payload.data;
        return {
            ...state,
            players,
            loading: false,
            fetched: true
        }
    }

}, defaultState)



// const reducer = handleActions({
//     [action]: (state) => {
//
//         const player = 1
//         return {
//             ...state,
//             player: 2
//         };
//     },
//     [action]: state => ({
//         ...state,
//         player: null,
//     }),
//     [action]: (state, { payload }) => {
//         const sumState = {
//             player: state.player,
//         }
//
//         if (state.player)
//             return state
//
//
//         return {
//             ...state,
//             player: 2,
//         };
//     }
//
// }, defaultState)

export default reducer;

