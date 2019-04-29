import {combineReducers} from 'redux';
import logoChange from './logoChange';
import logoURL from './logoURL';

export default combineReducers({
    newLogo: logoChange,
    mainLogo:logoURL

})