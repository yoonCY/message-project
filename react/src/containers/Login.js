import React, { Component } from 'react'

// redux
import { connect } from 'react-redux'

// electron 
import {
  ipcRenderer
} from 'electron';

// Components 
import { LoginComponent } from '../components/login';
import {
  user_login
} from 'actions/LoginAction';


export class Login extends Component {

  constructor(props) {
    super(props)

    this.state = {
      // user_id: { value: this.props.user_id, invalid: false },
      // user_pw: { value: '', invalid: false },
      user_id: { value: "kin123s", invalid: false },
      user_pw: { value: 'tlqkf1', invalid: false },
      redirect: false
    }

    this.HendleKeyDownEvent = this.HendleKeyDownEvent.bind(this)
    this.LoginClickEvent = this.LoginClickEvent.bind(this);

    ipcRenderer.send("electron:resize", {
      //width: 420,
      width: 420,
      heigth: 450
    });

    ipcRenderer.send("electron:dev", { dev: true })

  }

  HendleKeyDownEvent(event) {

    let key = event.target.id;
    let add_state = {};

    add_state[key] = {
      value: event.target.value,
      invalid: (event.target.value.length < 1) ? true : false
    };

    this.setState(add_state);
  }

  LoginClickEvent() {

    let userIDinvalid = false;
    let userPWinvalid = false;

    let LoginApi = true;

    if (this.state.user_id.value.length < 1) {
      userIDinvalid = true;
      LoginApi = false;
    }

    if (this.state.user_pw.value.length < 1) {
      userPWinvalid = true;
      LoginApi = false;
    }

    if (LoginApi === false) {

      this.setState({
        ...this.state,
        user_id: {
          ...this.state.user_id,
          invalid: userIDinvalid
        },
        user_pw: {
          ...this.state.user_pw,
          invalid: userPWinvalid
        },
      });

    } else {

      this.props.user_login(this.state.user_id.value);

      ipcRenderer.send("electron:resize", {
        width: 1500,
        heigth: 850
      })

      this.props.history.push("/icu");

    }


  }


  render() {

    console.log(this.state.user_id)

    return (
      <LoginComponent
        user_id={this.state.user_id.value}
        user_pw={this.state.user_pw.value}
        onClick={this.LoginClickEvent}
        onKeyUp={this.HendleKeyDownEvent}
        userIDinvalid={this.state.user_id.invalid}
        userPWinvalid={this.state.user_pw.invalid}

      />
    )
  }
}

const mapStateToProps = (state) => {
  console.log("state :", state)
  return {
    user_id: state.Login.user_id
  }

}



export default connect(mapStateToProps, {
  user_login
})(Login)
