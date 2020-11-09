import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from "redux-thunk";
import { createLogger } from 'redux-logger';
import { reducer as formReducer } from 'redux-form';

import auth from './Reducers/auth/reducer';


const loggerMiddleware = createLogger();
const RootReducer = combineReducers({
    auth,
    formReducer
})

const AppStore = createStore(
    RootReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);

export default AppStore;
