import { createAction } from 'redux-actions';

const USERLOGIN = "USERLOGIN";
const USERLOGOUT = "USERLOGOUT";

// user_id 
export const user_login = createAction(USERLOGIN); // payload

export const user_logout = createAction(USERLOGOUT); // payload
