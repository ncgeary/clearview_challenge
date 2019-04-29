// import {NEW_LOGO} from '../actions/types';


// const initialState = {
    
// }

// export default function(state=initialState,action){
//     switch(action.type){
//         case NEW_LOGO:
//             return{
//                 ...state,
//                 logo: []
//             }
//         default:
//             return state;
//     }
// }

export default function(state=null, action){
    switch(action.type){
        case "NEW_LOGO":
            return action.payload;

        default:
            return state;
    }
}