import { createAction, handleActions } from 'redux-actions';

const MATCHURL = "MATCHURL";
const MATCHPARAM = "MATCHPARAM";

export const matchurl = createAction(MATCHURL); // props.location
export const matchparam = createAction(MATCHPARAM); // props.match.params