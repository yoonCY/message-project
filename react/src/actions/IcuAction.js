import { createAction } from 'redux-actions';

const MATCHURL = "MATCHURL";
const MATCHPARAM = "MATCHPARAM";

// 메신저 채팅 리스트
const ICUCHATLIST = "ICUCHATLIST";

const ICUJOINROOM = "ICUJOINROOM";


export const matchurl = createAction(MATCHURL); // props.location
export const matchparam = createAction(MATCHPARAM); // props.match.params

// 채팅 리스트 
export const icu_chat_list = createAction(ICUCHATLIST); // payload

// 방 입장 업데이트 
export const icu_join_room = createAction(ICUJOINROOM); // payload
