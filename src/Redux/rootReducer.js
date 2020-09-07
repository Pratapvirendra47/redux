import { combineReducers } from 'redux';
import cakeReducer from './Cake/cakeReducer';

const rootReducer = combineReducers({ cake : cakeReducer});
export default rootReducer;