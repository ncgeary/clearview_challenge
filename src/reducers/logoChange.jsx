import {NEW_LOGO} from '../actions/types';


const initialState = {
    logo: ['https://s3.amazonaws.com/images.clearviewsocial/CVSLogo.FullColor.RGB+(2).png']
}

export default function(state=initialState,action){
    switch(action.type){
        case NEW_LOGO:
            return{
                ...state,
                logo: []
            }
        default:
            return state;
    }
}