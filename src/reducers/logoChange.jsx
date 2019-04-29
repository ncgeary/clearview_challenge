const initialState = {
    id: 0,
    url: 'https://s3.amazonaws.com/images.clearviewsocial/CVSLogo.FullColor.RGB+(2).png'
}



export default function (state = initialState, action){
    switch(action.type){
        case "NEW_LOGO":
            console.log("hit")
            return [
                ...state,
                ...state.slice(0,1),
                { ...state[1], url: "base64data"}
            ]

        default:
            return state;
    }
}