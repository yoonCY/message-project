// types 
// 메뉴 색상 선택 
export const MENU_SELECT_COLOR = "MENU_SELECT_COLOR";
// 알림 메시지 
export const WEB_NOTIFICATION = "WEB_NOTIFICATION";


// dispatch Actions 
export const menu_select_color = ( param ) => {
    return {
        type : MENU_SELECT_COLOR,
        payload : param
    }
}

export const web_notification = ( param ) => {

    console.log(param)

    return {
        type : WEB_NOTIFICATION,
        state : param.state ? param.state : true,
        text : param.text ? param.text : "",
        style : param.style ? param.style : "primary",
        timeOut : param.timeOut ? param.timeOut : 1000
    }
}