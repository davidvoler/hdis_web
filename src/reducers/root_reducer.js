import  home  from './home';
import  dashboard  from './dashboard';

import { combineReducers } from 'redux';
import { reducer as formRrReducer } from 'redux-form'
import { routerReducer} from 'react-router-redux'

const rootReducer = combineReducers({
    home,
    dashboard,
    form: formRrReducer,
    router: routerReducer
})

export default rootReducer;