import {combineReducers} from 'redux'
import ChaptersReducer from './ChaptersReducer';
import UsersReducer from './UsersReducer';


export default combineReducers({
    ChaptersReducer, 
    UsersReducer
});