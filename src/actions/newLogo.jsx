import { NEW_LOGO } from './types';

export const newLogo = (url) =>{
    console.log("gottem")
    return{
        type: NEW_LOGO,
        payload: url
    }
}