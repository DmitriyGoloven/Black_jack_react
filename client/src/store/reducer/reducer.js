import {handleActions} from "redux-actions";


export const defaultState = {
    player: 1,

}

function reducer(state) {
    // switch(action.type) {
    //     case ACTION_1: return { value: action.value_1 };
    //     case ACTION_2: return { value: action.value_2 };

         return defaultState;
    }



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

