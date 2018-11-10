import { handleActions } from 'redux-actions';

const defaultState = {
    user_id: "",
    searchUser: ""
}

export default handleActions({
    USERLOGIN: (state, action) => ({
        ...state,
        user_id: action.payload
    }),
    USERLOGOUT : (state, action) => {
        return {
            ...state,
            user_id: ""
        }
    }
}, defaultState );