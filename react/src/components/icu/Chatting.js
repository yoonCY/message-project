import React from 'react'


// style
import styled from 'styled-components';
import { Button } from 'reactstrap';
import { Star } from 'styled-icons/fa-regular/Star'
import { PersonOutline } from 'styled-icons/material/PersonOutline'
import { Search } from 'styled-icons/feather/Search'


import Textarea from 'react-textarea-autosize';

const ChatArea = styled.div`
    width : 100%;
    height : 100vh;
    background : #fff;
`

const HeaderArea = styled.div`
    width : 100%;
    height : 60px;
    padding : 10px;
    -webkit-padding-start: 20px;
    background : #fff;
    border-bottom : 0.1px solid #717274;
`


const BodyArea = styled.div`
    width : 100%;
    height : ${
    props => ((props.height - 90) - (props.TextAreaRows + 10)) + "px"
    };
    max-height : ${
    props => ((props.height - 90) - (props.TextAreaRows + 10)) + "px"
    };
    
    padding : 10px;
    background : #fff;
    overflow-y : scroll;
`

const BodyContainers = styled.ul`
    
    
    list-style-type: none;
    -webkit-padding-start: 20px;

`;

const BodyComponents = styled.li`
    
    ${'' /* vertical-align: baseline; */}
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    font: inherit;
`;

const BodyTitleArea = styled.div`
    vertical-align: baseline;
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    font: inherit;
`

const BodyTitleText = styled.span`
    color : #000000;
    font-weight : bold;
`

const BodyTitleDate = styled.span`
    ${'' /* font-size : 16px; */}
    padding-left : 6px;
    color : #717274;
    opacity : 0.7;
`

const BodyContents = styled.div`
    line-height : 26px;
    font-size : 14px;
    margin-bottom : 10px;
    ${'' /* max-width : ${
        ${'' /* props => ( props.width - 1500 ) + "px" */}
    }; */}
    padding : 10px 0px 0px 0px;
    word-break:break-all;
`


const FooterArea = styled.div`
    width : 100%;
        height : ${
    props => (props.TextAreaRows) + "px"
    };
    padding : 10px;
    background : #fff;    
`

const FooterText = styled(Textarea) `
    ${'' /* height: ${
        props => ( props.TextAreaRows * 40 )+"px"
    }; */}
    width: ${
    props => (props.width) - 450 + "px"
    };
    border: 0;
    outline: 0;
    resize: null;
    box-sizing: border-box;
    padding: 6px;
    font-size: 14px;
    font-family: 'Nanum Gothic', sans-serif;
    text-align: left;
    color: #121212;
    
    
`

const FooterContents = styled.div`
    padding : 5px;
    border : 2px solid #717274;
    border-radius : 10px;
`

const FooterSubmitBtn = styled(Button) `
    position : absolute;
    width : 100px;
    height : 40px;
    disabled : true;
    
`

const HeaderTitle = styled.div`
    font-weight : bold;
`

const HeaderTitleIcons = styled.div`
    font-size : 12px;
    opacity : 0.7;
`
const HeaderSearchArea = styled.div`
    position : absolute;
    top : 10px;
    ${'' /* right : ${
        props => ( props.width - 200 )+"px"
    }; */}
    right : 20px;
`

const HeaderSearchBox = styled.div`
    width : 120px;
    height : 35px;
    padding : 8px;
    border : 0.6px solid #000;
    line-height : 10px;
    font-size : 14px;
    opacity : 0.6;
    border-radius : 6px;
`

const Header = (props) => {

    const {
        width,
        toggle,

        room_no,
        room_name,
        room_type,
        MemberCount
    } = props;

    const RoomTypeText = {
        Member : "일대일 대화방",
        Group : "그룹 대화방",
        Team : "팀 대화방",
    }


    return (
        <HeaderArea>
            <HeaderTitle>
                #{room_name}{room_no} ( {RoomTypeText[room_type]} )
            </HeaderTitle>

            <HeaderTitleIcons>
                <Star size="12" /> | <PersonOutline size="14" /> {MemberCount} |
            </HeaderTitleIcons>
            <HeaderSearchArea
                width={width}
            >
                <HeaderSearchBox onClick={toggle}>
                    <Search size="20" /> Search
                </HeaderSearchBox>

            </HeaderSearchArea>
        </HeaderArea>
    )
}

const Body = (props) => {

    const {
        width,
        height,
        TextAreaRows,
    } = props;

    let test = [];
    for (let i = 0; i < 50; i++) {
        test[i] = i;
    }

    return (
        <BodyArea
            width={width}
            height={height}
            TextAreaRows={TextAreaRows}
        >
            <BodyContainers>
                {
                    test.map((row, index) => {
                        const tests = "test" + index;
                        return (
                            <BodyComponents key={tests}>
                                <BodyTitleArea>
                                    <BodyTitleText>이름</BodyTitleText>
                                    <BodyTitleDate>12:00 AM</BodyTitleDate>
                                </BodyTitleArea>
                                <BodyContents width={width}>
                                    123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123
                                </BodyContents>

                            </BodyComponents>
                        )
                    })

                }


            </BodyContainers>

        </BodyArea>
    )
}

const Footer = (props) => {

    const {
        room_name,
        width,
        TextAreaRows,
        TextAreaKeyEvent,
        TextAreaValue,
        ChangeHeight,
        disabledBtn,
        sendMessage
    } = props;

    
    return (
        <FooterArea TextAreaRows={TextAreaRows}>
            <FooterContents>
                {/* <Input type="textarea" name="text" id="exampleText" /> */}
                <FooterText
                    onChange={(event) => TextAreaKeyEvent(event)}
                    width={width}
                    value={TextAreaValue}
                    autoFocus
                    placeholder={room_name + " 에게 메시지를 작성합니다."}
                    onHeightChange={(height, instance) => ChangeHeight(height, instance)}
                    onKeyDown={ (event) => {
                        if( event.keyCode === 13 )
                            sendMessage();
                    } }
                />
                <FooterSubmitBtn
                    width={width}
                    color={"success"}
                    disabled={disabledBtn}
                    onClick={ () => sendMessage() }
                    
                >
                    전송
                </FooterSubmitBtn>

            </FooterContents>

        </FooterArea>
    )
}

export default (props) => {

    const {
        width,
        height,
        TextAreaRows,

        TextAreaKeyEvent,
        TextAreaValue,
        ChangeHeight,
        disabledBtn,
        toggle,

        room_no,
        room_name,
        room_type,
        MemberCount,

        sendMessage

    } = props;

    return (
        <ChatArea>
            <Header
                room_no={room_no}
                width={width}
                toggle={toggle}
                room_name={room_name}
                room_type={room_type}
                MemberCount={MemberCount}
            />
            <Body
                width={width}
                height={height}
                TextAreaRows={TextAreaRows}
            />
            <Footer
                width={width}
                TextAreaRows={TextAreaRows}
                TextAreaKeyEvent={TextAreaKeyEvent}
                TextAreaValue={TextAreaValue}
                ChangeHeight={ChangeHeight}
                room_name={room_name}
                disabledBtn={disabledBtn}
                sendMessage={sendMessage}
            />

        </ChatArea>
    )
}
