import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import {authenticateMiddleware} from "./authMiddleware";


export const store = createStore(rootReducer, applyMiddleware(authenticateMiddleware));
