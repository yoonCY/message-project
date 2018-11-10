import { handleActions } from 'redux-actions';

const defaultState = {
    matchURL: "",
    matchParam: "",
    room_no : 0,
    list: [],
    user_list: [],
}


export default handleActions({
    MATCHURL: (state, action) => ({
        ...state,
        matchURL: action.matchURL
    }),

    MATCHPARAM: (state, action) => ({
        ...state,
        matchParam: action.matchParam
    }),
    ICUCHATLIST : (state, action) => {
        
        return {
            ...state,
            list: action.payload,
            user_list: action.payload
        }
    },
    ICUJOINROOM : (state, action) => {
        return {
            ...state,
            room_no: parseInt( action.payload, 10 )
        }
    }
}, defaultState );

