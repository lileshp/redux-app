import {contactReducers} from './contactReducers'
import {combineReducers} from 'redux';

export default combineReducers({
    contact:contactReducers
})