import  home  from './home';
import  dashboard  from './dashboard';
import  editor  from './editor';
import { combineReducers } from 'redux';
import { reducer as formRrReducer } from 'redux-form';
const rootReducer = combineReducers({
    home,
    dashboard,
    editor,
    form: formRrReducer()
})

export default rootReducer;