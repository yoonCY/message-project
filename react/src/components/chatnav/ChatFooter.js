import React, { Component } from 'react'


import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { ListAlt } from 'styled-icons/fa-regular/ListAlt'
import { User } from 'styled-icons/fa-regular/User'

const routes = {
    LOGIN: "/login",
    ROOT: "/",
    ICU: "/icu",
    ICU_USER: "/icu/user",
    ICU_CHAT: "/icu/chat",
    ICU_CHAT_PAGE: "/icu/:type/:userID",

    IMESSAGE: "/imessage",
    TEST: "/test",
}

const FooterComponet = styled.div`
    position : absolute;
    bottom: 0;
    width: 200px;
    
    ${'' /* background: #4d394b; */}
    background : #fff;
    border-top : 1px solid #000;
`;

const FooterIconComponet = styled.div`
  display : inline-flex;
  width : 49%;
  bottom: 0;
`;

const FooterIcons = styled.div`
  padding : 15px 0 0px 30px;
  color : #000;
  opacity : 0.8;
  
`;

const FooterIconUser = styled(User)`
  opacity : 0.8;
  font-weight: 100;
`;

const FooterIconListAlt = styled(ListAlt)`
  opacity : 0.8;
  font-weight: 100;
`;

const FooterIconsText = styled.div`
  font-size : 13px;
  font-weight: 100;
`;

export class ChatFooter extends Component {

  render() {
    return (
      <FooterComponet>
        <Link to={routes.ICU_USER} >
          <FooterIconComponet>
            <FooterIcons>
              <FooterIconUser color="#000" size="30" />
              <FooterIconsText>
                User
              </FooterIconsText>
              
            </FooterIcons>
          </FooterIconComponet>
        </Link>
        <Link to={routes.ICU_CHAT} >
          <FooterIconComponet>
            <FooterIcons>
              <FooterIconListAlt color="#000" size="30"/>
              <FooterIconsText>
                Chats
              </FooterIconsText>
            </FooterIcons>
          </FooterIconComponet>
        </Link>
      </FooterComponet>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(ChatFooter)
