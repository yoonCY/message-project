import React, { Component } from 'react'
import { connect } from 'react-redux'

// router
import { Link } from 'react-router-dom'

// Post 
import Post from '../../lib/Post';

// components 
import {
    ChatHeader,
    ChatBody
} from '../../components/chatnav';

import {
    ChatList
} from '../../components/icu';

export class Chat extends Component {

    constructor(props) {
        super(props)

        this.state = {
            List: [],
            UserList: []
        }

        this.getMyRoomList = this.getMyRoomList.bind(this);
        this.HendleSearchEvent = this.HendleSearchEvent.bind(this)
        this.getMyRoomList();
    }

    getMyRoomList = async () => {

        let url = "http://kin123s.iwedding.biz:6001/apichat/myRoomLists";

        const userlist = await Post(url, {
            userID: "kin123s"
        });
        
        if( userlist.result ){
            this.setState({
                ...this.state,
                List: userlist.data,
                UserList: userlist.data,
            })
        }
        
    }

    HendleSearchEvent(value) {

        let List = this.state.UserList;
        let filterData = [];
        if (value === '') {
            this.setState({
                List: List
            })
            return;
        }


        filterData = List.filter((item) => {
            return item.roomName.toLowerCase().search(

                value.toLowerCase()
            ) !== -1;
        });

        this.setState({
            List: filterData
        })

    }

    render() {

        const { List } = this.state;

        return (
            <div>
                <ChatHeader
                    onKeyUp={this.HendleSearchEvent}
                />
                <ChatBody bottom={"0"}>
                    {
                        List.map((row, index) => {

                            const Links = `/icu/chat/${row.id}`;
                            let keys = `ChatComponent_${index}`;
                            return (
                                <Link to={Links} key={`ChatListLink_${index}`} >
                                    <ChatList
                                        key={keys}
                                        contents={row.contents}
                                        roomName={row.roomName}
                                        lastActiveTime={row.lastActiveTime}
                                    />
                                </Link>
                            )

                        })
                    }

                </ChatBody>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat)
