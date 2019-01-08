import { combineReducers } from 'redux';
import movies from './moviesReducer';

export default combineReducers({
    movies
});
/*
    I know combining reducers looks innecesary at this stage,
    but could be necessary  if the project start growing.
*/
