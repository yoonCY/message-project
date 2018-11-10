import React, { Component } from 'react'
import PropTypes from 'prop-types';



import { connect } from 'react-redux'

import { Link } from 'react-router-dom'
// Post 
import {
  callbackPost
} from 'lib/Post';

// components 
import {
  ChatHeader,
  ChatBody,
  ChatFooter

} from '../../components/chatnav';

import {
  ChatList
} from '../../components/icu';

import {
  icu_chat_list
} from 'actions/IcuAction'

class Chat extends Component {

  constructor(props) {
    super(props)

    this.state = {
      list : [],
      user_list: []
    }

    

    this.getMyRoomList = this.getMyRoomList.bind(this);
    this.HendleSearchEvent = this.HendleSearchEvent.bind(this)
    this.getMyRoomList();
  }

  getMyRoomList = () => {

    let url = "http://kin123s.iwedding.biz:6001/room/room-list";
    let axiosData = {
      user_id: "kin123s"
    }

    let data = callbackPost( url, axiosData);
    data.then( ( result ) => {
      
      if( result.result === false ){
        // ERROR 
        return;
      }

      let list = [];

      result.data.map( (row, index) => {
        
        const tmp = {
          room_no : row.room_no,
          room_name : row.member_info[0].room_name,
          room_type : row.room_type,
          notReadCount : row.member_info[0].notReadCount,
          lastContents : row.lastContents,
          lastActiveTime : row.lastActiveTime,
        };

        list[ index ] = tmp;
      });

      this.setState({
        ...this.state,
        list: list,
        user_list: list,
      })

    })

  }

  //componentWillReceiveProps
  HendleSearchEvent(value) {

    let list = this.state.user_list;
    let filterData = [];
    if (value === '') {
      this.setState({
        list: list
      })
      return;
    }

    filterData = list.filter((item) => {
      return item.room_name.search(
        value.toLowerCase()
      ) !== -1;
    });

    
    this.setState({
      list: filterData
    })

  }

  render() {

    const { list } = this.state;

    return (
      <div style={{position: "absolute", width : "201px", height : "100vh", borderRight : "1px solid #000"}}>
        <ChatHeader
          onKeyUp={this.HendleSearchEvent}
        />
        <ChatBody>
          {
            
            list.map((row, index) => {

              
              const Links = `/icu/chat/${row.room_no}`;
              let keys = `ChatComponent_${index}`;
              
              return (
                <Link to={Links} key={`ChatListLink_${index}`} >
                  <ChatList
                    key={keys}
                    room_no={row.room_no}
                    room_type={row.room_type}
                    room_name={row.room_name}
                    notReadCount={row.notReadCount}
                    lastContents={row.lastContents} 
                    lastActiveTime={row.lastActiveTime} 
                  />
                </Link>
              )

            })
          }

        </ChatBody>
        <ChatFooter />
      </div>
    )
  }
}

Chat.propTypes = {
  list : PropTypes.array,
  user_list : PropTypes.array
};

Chat.defaultProps = {
  list : [{
    member_info : {
      room_name : "test"
    }
  }],
  user_list : [],
};

const mapStateToProps = (state) => {
  
  return {

  }
}

export default connect(mapStateToProps, {
  icu_chat_list
})(Chat)
