import React, { Component } from 'react'
import { connect } from 'react-redux'

// sockets 
import socket from 'socket.io-client';

const io = socket.connect("http://kin123s.iwedding.biz:6001:ICU");

let authkey = "";

let userInfo = {
    user_id: "",
    user_type: 1
}

export class Icu extends Component {


    constructor(props) {
        super(props)

        this.state = {
            user_id: this.props.user_id,
            userType: 1
        }

        this._socketConnectProcess = this._socketConnectProcess.bind(this)

        userInfo.user_id = this.props.userID;

        io.on("join:authkey", (data) => {
            authkey = data.authkey;
            console.log(authkey)
            this._socketConnectProcess();

        });

        io.on("reconnect", () => {
            console.log("재연결")
            window.location.reload()
        })

        io.on("list:user_list", (data) => {

            try {
                let list = JSON.parse(data);
                console.log(list)
            } catch (e) {

            }

        });

    }


    _socketConnectProcess() {
        // 방 입장
        io.emit("join:first", userInfo, authkey);
        // 리스트
        io.emit("join:list", userInfo, authkey);

    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {

    console.log("socket State : ", state)
    return {
        user_id: state.Login.user_id
    }
}


export default connect(mapStateToProps)(Icu)
