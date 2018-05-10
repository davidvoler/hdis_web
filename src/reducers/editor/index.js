import  edit  from './edit';
import  create  from './create';
import  list  from './list';
import { combineReducers } from 'redux';

const editorReducer = combineReducers({
    edit,
    list,
    create
})

export default editorReducer;