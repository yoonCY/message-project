import {
    MENU_SELECT_COLOR,
    WEB_NOTIFICATION
} from '../actions/DisplayAction'

const initialState = {
    MenuColor: "#271d26", // 271d26
    MenuSelectColor: "#fff", //4d394b
    MenuTextColor: "#888287",
    webNotification: {
        state: false,
        text: "",
        style: "primary",
        timeOut: 1000
    }

}

export default (state = initialState, action) => {
    
    switch (action.type) {

        case MENU_SELECT_COLOR:
            return {
                ...state,
                MenuSelectColor: action.payload
            }
        case WEB_NOTIFICATION:
            
            return {
                ...state,
                WEB_NOTIFICATION: {
                    state: action.state,
                    text: action.text,
                    style: action.style,
                    timeOut: action.timeOut
                }
            }

        default:
            return state
    }
}
