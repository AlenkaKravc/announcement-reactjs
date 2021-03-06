import {createStore, combineReducers, applyMiddleware} from 'redux';

import {ads} from './ads';

const logger = store => next => action => {
    let result;
    console.groupCollapsed("dispatching", action.type);
    console.log('prev state', store.getState());
    console.log('action', action);
    result = next(action);
    console.log('next state', store.getState());
    console.groupEnd();
    return result;
};

const saver = store => next => action => {
    let result = next(action);
    localStorage['test'] = JSON.stringify(store.getState().persistStore);
    return result;
};

const initStorage = (initialState = {}) => {

    return initialState;
};

export const storeFactory = (initialState = {}) => (
    applyMiddleware(logger, saver)(createStore)(
        combineReducers({
            ads,
        }), initStorage(initialState)
    )
);
