import  home  from './home';
import  dashboard  from './dashboard';
import  editor  from './editor';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    home,
    dashboard,
    editor
})

export default rootReducer;