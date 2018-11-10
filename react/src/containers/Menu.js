import React, { Component } from 'react'
import { connect } from 'react-redux'

// load Components
import {
  MenuList,
  MenuItem
} from '../components/menu';

// router 
import { Link, Redirect } from 'react-router-dom';

// style
import styled from 'styled-components';

// socket 
import Imessage from 'lib/socket/Imessage';
import Icu from 'lib/socket/Icu';


// electron
import { ipcRenderer } from 'electron'

// styled icon
import { Message as MessageIcon } from 'styled-icons/material/Message';
import { Notifications as NotificationsIcon } from 'styled-icons/material/Notifications';
import { Settings as SettingsIcon } from 'styled-icons/material/Settings';
import { Weebly as WeeblyIcon } from 'styled-icons/fa-brands/Weebly';
import { LogOut as LogOutIcon } from 'styled-icons/feather/LogOut';


// actions 
import {
  user_login
} from 'actions/LoginAction';

const Container = styled.div`
  position : absolute;
  width : 100px;
`

const MenuListData = [
  {
    MenuName: '메신저',
    Link: "/icu/user",
    tag: MessageIcon
  },
  {
    MenuName: '알림',
    Link: "/notice",
    tag: NotificationsIcon
  },
  {
    MenuName: 'with',
    Link: "/test",
    tag: WeeblyIcon
  },
  {
    MenuName: '설정',
    Link: "/setting",
    tag: SettingsIcon
  },
  {
    MenuName: '로그아웃',
    Link: "/logout",
    tag: LogOutIcon
  }
]


export class Menu extends Component {

  constructor(props) {
    super(props)

    this.state = {
      MenuTab: 0,
      redirect : ""
    }

    // this.props.user_login("kin123s");

    this.HandleMenuClick = this.HandleMenuClick.bind(this);
    this.setRedirect = this.setRedirect.bind(this);
    this.renderRedirect = this.renderRedirect.bind(this)
    
    ipcRenderer.send("electron:dev", { dev: true })
    
  }

  HandleMenuClick(MenuNo) {

    this.setState({
      ...this.state,
      MenuTab: MenuNo
    });
  }

  componentDidMount(){
    this.setRedirect(); 
  }

  componentWillmount() {
    
  }

  setRedirect() {

    if( this.props.user_id === '' ){
      console.log("ROOT user_id  없음")
      this.setState({
        ...this.state,
        redirect: "/login"
      })
    }

    
  }

  renderRedirect() {
    if ( this.state.redirect !== "") {
      console.log("으아아아!")
      return <Redirect to={this.state.redirect} />
    }
  }


  componentWillReceiveProps(nextProps) {

    console.log( "리시버 업데이트", nextProps, this.props);

  }

  render() {


    const {
      MenuTab
    } = this.state;

    const {
      MenuColor,
      MenuSelectColor,
      MenuTextColor
    } = this.props;


    return (
      <div>
        <Container>
          
          <MenuList
            MenuColor={MenuColor}
          >
            {
              MenuListData.map((row, index) => {

                const keys = `MenuItem_${index}`;


                return (
                  <Link to={row.Link} key={`MenuLinks_${index}`}>
                    <MenuItem
                      MenuColor={MenuColor}
                      MenuSelectColor={MenuSelectColor}
                      MenuTextColor={MenuTextColor}
                      MenuTab={MenuTab}
                      MenuName={row.MenuName}
                      key={keys}
                      indexKey={index}
                      onClick={this.HandleMenuClick}
                      Tag={row.tag}
                    />
                  </Link>
                )
              })
            }
          </MenuList>
            
          {this.renderRedirect()}
          <Imessage />
          <Icu />
        </Container>
      </div>
    )
  }
}

Menu.defaultProps = {
  user_id : ""
};

const mapStateToProps = (state) => {

  
  return {
    user_id : state.Login.user_id,
    MenuColor: state.Display.MenuColor,
    MenuSelectColor: state.Display.MenuSelectColor,
    MenuTextColor: state.Display.MenuTextColor,
    webNotification: state.Display.webNotification
  }
}


export default connect(
  mapStateToProps,
  {
    user_login
  }
)(Menu)
