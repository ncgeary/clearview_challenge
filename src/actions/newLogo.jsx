import { NEW_LOGO } from './types';

export const newLogo = (logoURL) =>{
    // console.log("gottem")
    return{
        type: NEW_LOGO,
        payload: logoURL
    }
}