import {combineReducers} from 'redux';
import logoChange from './logoChange';


export default combineReducers({
    newLogo: logoChange,
})