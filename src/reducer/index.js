import {combineReducers} from 'redux';

import detailReducer from './detailReducer';
import movieReducer from './movieReducer';
import searchReducer from './searchReducer';


export default combineReducers ({
    movie:movieReducer,
    detail:detailReducer,
    search:searchReducer,
 
})