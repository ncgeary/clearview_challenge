const initialState = {
    id: 0,
    url: []
}

export default function (state = initialState, action){
    switch(action.type){
        case "NEW_LOGO":
            // console.log(action.payload)
            return {
                ...state,
                url: action.payload
            }

        default:
            return state;
    }
}