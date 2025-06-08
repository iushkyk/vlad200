import {combineReducers} from "@reduxjs/toolkit";
import counterReducer from '../features/slice/counterScice'

const rootReducer = combineReducers({
    counter: counterReducer
});

export default rootReducer;
