import React, { Component } from 'react'
import PropTypes from 'prop-types'


import { connect } from 'react-redux'
import {
  icu_join_room
} from 'actions/IcuAction'


import {
  Chatting,
  SearchModals
} from 'components/icu';

import {
  callbackPost
} from 'lib/Post'



export class ChatPage extends Component {

  constructor(props) {
    super(props)

    console.log(" props Test : ", this.props )
    this.state = {
      room_no: this.props.room_no ? this.props.room_no : this.props.match.params.room_no,
      member_list: [],
      room_name: "채팅방",
      room_type: "Member",

      // display Set 
      width: window.innerWidth,
      height: window.innerHeight,
      TextAreaValue: '',
      TextAreaRows: 33,
      disabled: true,
      searchModal: false,

      start : 0
    };


    this.props.icu_join_room( this.props.match.params.room_no );


    this.HendleKeyEvent = this.HendleKeyEvent.bind(this);
    this.getRoomInfo = this.getRoomInfo.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this)
    this.HendleTextBoxHeightEvent = this.HendleTextBoxHeightEvent.bind(this)
    this.toggle = this.toggle.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  toggle() {
    this.setState({
      searchModal: !this.state.searchModal
    });
  }


  componentWillReceiveProps(nextProps) {
    
    this.getRoomInfo( nextProps.match.params.room_no );
  }

  componentWillUnmount() {
    this.updateDimensions();
  }
  componentDidMount() {

    window.addEventListener("resize", this.updateDimensions);
  }

  updateDimensions() {

    const innerWidth = window.innerWidth;
    const innerHeight = window.innerHeight;

    this.setState({
      width: innerWidth,
      height: innerHeight
    });
  }

  HendleKeyEvent(event) {

    let disabled = true;
    if (event.target.value.length > 0) {
      disabled = false;
    }

    this.setState({
      TextAreaValue: event.target.value,
      disabled: disabled
    })

  }

  HendleTextBoxHeightEvent(height, instance) {
    if( this.state.disabled === true )
      height = 33;

    this.setState({
      TextAreaRows: height
    })
  }

  getRoomInfo(room_no) {

    const url = "http://kin123s.iwedding.biz:6001/room/room-info";
    const data = {
      user_id: "kin123s",
      room_no: room_no
    }
    callbackPost(url, data)
      .then((result) => {

        if (result.result === false) {
          console.log("방 상세정보 리스트 통신실패")
          return;
        }
        const data = result.data;
        const room_name = data.member_info[0].room_name;

        this.setState({
          room_name: room_name,
          room_type: data.room_type,
          member_list: data.member_list,
          room_no: data.room_no
        })
      })
  }

  getMessageList(){



  }

  sendMessage(){
    
    const { 
      TextAreaValue,
      disabled
    } = this.state;

    if( disabled === true ){
      return;
    }
    
    const url = "http://kin123s.iwedding.biz:6001/chat/send-message";
    const data = {
      user_id : "kin123s",
      room_no : this.props.room_no,
      contents : TextAreaValue,
    }

    callbackPost(url, data)
      .then((result) => {

        if (result.result === false) {
          console.log("메시지 전송 실패")
          return;
        }
        const data = result.data;
        
        console.log("메시지 전송 :", data)
      })

    this.setState({
      TextAreaValue: "",
      TextAreaRows : 33,
      disabled: false
    })

  }

  render() {

    const {
      width,
      height,
      disabled,
      searchModal,
      TextAreaRows,
      TextAreaValue,

      room_name,
      room_type,
      member_list,
      room_no

    } = this.state;

    const MemberCount = member_list.length;
    
    return (
      <div>
        <SearchModals
          width={width}
          searchModal={searchModal}
          toggle={this.toggle}


        />
        <Chatting
          width={width}
          height={height}
          TextAreaRows={TextAreaRows}

          TextAreaValue={TextAreaValue}
          TextAreaKeyEvent={this.HendleKeyEvent}
          ChangeHeight={this.HendleTextBoxHeightEvent}
          disabledBtn={disabled}
          toggle={this.toggle}

          room_no={room_no}
          room_name={room_name}
          room_type={room_type}
          MemberCount={MemberCount}
          sendMessage={this.sendMessage}
          
        />
      </div>

    )
  }
}

ChatPage.defaultProps = {
  room_no: 0,
  room_name: "타이틀",
  room_type: "1:1채팅",
  memberCount: 0
};

ChatPage.propTypes = {
  room_no: PropTypes.number.isRequired,
  room_name: PropTypes.string.isRequired,
  room_type: PropTypes.string.isRequired,
  memberCount: PropTypes.number.isRequired
}




const mapStateToProps = (state) => {

  console.log("state!!", state);
  return {
    room_no: state.Icu.room_no
  }

}

export default connect(mapStateToProps, {
  icu_join_room
})(ChatPage)
