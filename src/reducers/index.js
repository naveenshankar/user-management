import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

const combinedReducers = combineReducers({ routing });
export default combinedReducers;
