import  home  from './home';
import  dashboard  from './dashboard';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    home,
    dashboard
})

export default rootReducer;