import React from 'react'

// style
import styled from 'styled-components';


const ChatLists = styled.div`
width : 192px;
padding : 8px;
${'' /* background: #c0c0c0; */}
${'' /* background : ""; */}
color : #000;
margin: 1px;
`;

const ChatInfo = styled.div`
width : 100%;
margin-bottom : 6px;
`

const ChatInfoName = styled.span`

font: 11px/11px "Lato", Arial, sans-serif;
font-weight : bold;
`

const ChatInfoDate = styled.span`
font-size : 11px;
float : right;
padding-top : 3px;
font-weight : 200;
opacity : 0.5;
`

const ChatData = styled.span`
width : 100px;
font-size : 11px;
opacity : 0.8;
word-wrap: break-word;
`;

const ChatNotReadNumber = styled.span`
  float : right;
  
  width : ${
  props => (16 * (props.length * 1)) + "px"
  };

  padding : 2px 2px 2px 2px;
  height : 20px;
  display : ${
  props => (props.notReadCount > 0) ? "block" : "none"
  };
  border-radius : 14px;
  color: #FFF;
  background : #ff5b49;
  text-align : center;

`

const dateFormat = (ISOdate) => {

  let nowDate = new Date();
  let thisDate = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate(), 0, 0, 0);
  let today = Math.floor(thisDate.getTime() / 1000)

  let date = new Date(ISOdate);
  let ActionDate = Math.floor(date.getTime() / 1000);
  ActionDate = (today - ActionDate);

  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  let printDate = "";

  if (day < 10) {
    day = '0' + day;
  }
  if (month < 10) {
    month = '0' + month;
  }

  if (hour < 10) {
    hour = '0' + hour;
  }
  if (minute < 10) {
    minute = '0' + minute;
  }
  if (second < 10) {
    second = '0' + second;
  }

  if (ActionDate < 0) {
    printDate = `${hour}:${minute}`;
  } else if (ActionDate < 86400) {
    printDate = `어제`;
  } else {
    printDate = `${year}-${month}-${day}`;
  }



  return printDate
}

export default (props) => {



  const {
    room_no,
    // room_type,
    room_name,
    notReadCount,
    lastContents,
    lastActiveTime

  } = props;



  const date = dateFormat(lastActiveTime);

  let name = room_name;
  let conetent = lastContents;
  const notReadNumber = notReadCount.toString().length;

  if ( room_name.length > 10) {
    name = name.substring(0, 10) + ".."
  }

  if ( lastContents.length > 15) {
    conetent = conetent.substring(0, 15) + ".."
  }

  return (
    <ChatLists>
      <ChatInfo>
        <ChatInfoName>
          {name}
        </ChatInfoName>
        <ChatInfoDate>
          {date}
        </ChatInfoDate>
      </ChatInfo>
      <ChatData>
        {conetent}
        <ChatNotReadNumber
          length={notReadNumber}
          notReadCount={notReadCount}
        > {notReadCount} </ChatNotReadNumber>
      </ChatData>
    </ChatLists>
  )

}