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

export const hit = createRequestAction('HIT', () => ({
    request: {
        method: 'post',
        url: '/hit'
    }
}));

export const stand = createRequestAction('STAND', () => ({
    request: {
        method: 'post',
        url: '/stand'
    }
}));

export const reset = createRequestAction('RESET', () => ({
    request: {
        method: 'post',
        url: '/reset'
    }
}));