import { combineReducers } from 'redux';
import cash from './cashReducer';

const rootReducer = combineReducers({
    cash
})

export default rootReducer;