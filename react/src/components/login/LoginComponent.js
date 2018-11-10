import React from 'react';

// style
import { Container, Row, Label, Col, Input, Button, FormFeedback } from 'reactstrap';
import styled from 'styled-components'


// styled css
const LoginArea = styled.div`
    width: 399px;
    height : 350px;
    background : #fff;
`

const Header = styled.div`
    
    width : 100%;
    height : 100px;
    padding : 10px;
    ${'' /* background : fuchsia; */}
    border-bottom : 1px solid #000;
`

const HeaderTitleArea = styled.div`
    position : relative;
    padding : 10px 0 0 10px; ;
    text-align : center;
`

const TitleText = styled.span`
    
    text-align : center;
    font-size : ${
    props => props.fontsise ? props.fontsise : "14px"
    }
`

const AlignCenter = styled.div`
    position : relative;
    align-items : center;
    padding-left : 150px;
    margin-top : 10px;
    margin-bottom : 10px;
`

const HeaderSubTitle = styled.div`
    text-align : center;
`

const Body = styled.div`

    padding : 20px;
`


const HeaderComponent = () => {
    return (
        <Header>
            <HeaderTitleArea>
                <TitleText fontsise="20px">
                    타이틀
                </TitleText>
            </HeaderTitleArea>
            <HeaderSubTitle>
                <TitleText>
                    서브 타이틀 꾸물꾸물
                </TitleText>
            </HeaderSubTitle>
        </Header>
    )
}


const BodyComponent = (props) => {

    const {
        onKeyUp,
        onClick,
        userIDinvalid,
        userPWinvalid,

        user_id,
        user_pw
    } = props;

    console.log(user_id)
    return (

        <Body>
            <Container>
                <Row>
                    <Label for="user_id" sm={2}>아이디</Label>
                    <Col sm={10}>
                        <Input
                            invalid={userIDinvalid}
                            type="text"
                            name="user_id"
                            id="user_id"
                            placeholder="아이디를 입력해주세요"
                            onKeyUp={(event) => {
                                if (event.keyCode === 13)
                                    onClick();
                                else
                                    onKeyUp(event)
                            }}
                            
                            defaultValue={user_id}
                            />
                            
                            
                        <FormFeedback>아이디를 입력해주세요!</FormFeedback>
                    </Col>
                </Row>

                <Row>
                    <Label for="user_pw" sm={2}>비밀번호</Label>
                    <Col sm={10}>
                        <Input
                            invalid={userPWinvalid}
                            type="password"
                            name="user_pw"
                            id="user_pw"
                            placeholder="비밀번호를 입력해주세요"
                            onKeyUp={(event) => {
                                if (event.keyCode === 13)
                                    onClick();
                                else
                                    onKeyUp(event)
                            }}
                            defaultValue={user_pw}
                        />
                        <FormFeedback>비밀번호를 입력해주세요!</FormFeedback>
                    </Col>
                </Row>
                <Row>
                    <AlignCenter>
                        <Label check>
                            <Input type="checkbox" />
                            정보 기억하기
                        </Label>
                    </AlignCenter>
                </Row>
                <Row>
                    <Col sm={12}>
                        <Button
                            size="lg" block
                            onClick={() => onClick()} >
                            로그인
                    </Button>
                    </Col>
                </Row>
            </Container>
        </Body>
    )
}

const LoginComponent = (props) => {

    return (
        <LoginArea>
            <HeaderComponent />
            <BodyComponent
                user_id={props.user_id}
                user_pw={props.user_pw}
                onClick={props.onClick}
                onKeyUp={props.onKeyUp}
                userIDinvalid={props.userIDinvalid}
                userPWinvalid={props.userPWinvalid}
            />
        </LoginArea>
    );
}

export default LoginComponent

