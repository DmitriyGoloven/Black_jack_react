import {createAction} from "redux-actions";

const createRequestAction = (type, payloadCreator) => {
    const action = createAction(type, payloadCreator);
    action.success = type + '_SUCCESS';
    action.fail = type + '_FAIL';
    return action;
}

export const getNewGame = createRequestAction('GET_NEW_GAME', () => ({
    request: {
        method: 'get',
        url: '/game'
    }
}));