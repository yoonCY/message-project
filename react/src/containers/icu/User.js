import React, { Component } from 'react'
import { connect } from 'react-redux'

// Post 
import {
    callbackPost
} from '../../lib/Post';

// actions 
import { menu_select_color } from '../../actions/DisplayAction'

// components 
import {
    ChatHeader,
    ChatBody,
    ChatFooter
} from '../../components/chatnav';

import {
    UserList
} from '../../components/icu';

import Post from 'lib/Post'

export class User extends Component {

    constructor(props) {
        super(props)

        this.state = {
            UserName: [],
            UserTel: [],
            UserList: {},
            List: {},
            OpenCategorys: [],
            searchValue: ""
        }

        this.MemberList = this.MemberList.bind(this);
        this.HendleCategoryClickEvent = this.HendleCategoryClickEvent.bind(this)

        this.HendleSearchEvent = this.HendleSearchEvent.bind(this)
        this.HendleClickEvent = this.HendleClickEvent.bind(this)


        this.props.menu_select_color("#FFF");

        this.MemberList();
    }

    //componentWillReceiveProps
    HendleSearchEvent(value) {

        const List = this.state.UserList;
        const filterData = [];
        if (value === '') {
            this.setState({
                List: List
            })
            return;
        }

        Object.keys(List).map((row) => {

            return filterData[row] = List[row].filter((item) => {

                return item.name.toLowerCase().search(
                    value.toLowerCase()
                ) !== -1;
            });
        })

        this.setState({
            List: filterData
        })

    }

    MemberList() {

        let CategoryDisplay = [];

        let url = "https://www.ifamily.co.kr/icard/sub/get_member_list";
        let ajax_data = {};

        callbackPost(url, ajax_data)
        .then((result) => {

            if (result.result === false) {
                return;
            }

            const data = result.data.list;
            const ListCount = Object.keys(data.user_list).length;
            for (let i = 1; i <= ListCount; i++) {
                CategoryDisplay[i] = false;
            }

            this.setState({
                ...this.state,
                CloseCategorys: CategoryDisplay,
                UserList: data.user_list,
                List: data.user_list,

                UserName: data.user_name,
                UserTel: data.user_tel
            });
        })


    }

    HendleCategoryClickEvent(index) {

        const indexNumbers = this.state.CloseCategorys;
        const CheckCategoryNo = indexNumbers[index];

        if (CheckCategoryNo === true) {
            indexNumbers[index] = false;
        } else {
            indexNumbers[index] = true;
        }

        this.setState({
            ...this.state,
            OpenCategorys: indexNumbers
        })

    }

    HendleClickEvent = async ( target_id ) => {

        const url = "http://kin123s.iwedding.biz:6001/room/room-regist";
        const send_data = {
            user_id : this.props.user_id,
            member_list : [ this.props.user_id, target_id ],
            
        }

    
        const check = await Post( url, send_data )
        
        console.log("test", target_id, check )


    }

    render() {

        const { List, OpenCategorys } = this.state;

        

        return (
            <div style={{position: "absolute", width : "201px", height : "100vh", borderRight : "1px solid #000"}}>
                <ChatHeader
                    onKeyUp={this.HendleSearchEvent}
                />
                <ChatBody>
                    <UserList
                        List={List}
                        OpenCategorys={OpenCategorys}
                        CategoryClickEvent={this.HendleCategoryClickEvent}
                        onClick={this.HendleClickEvent}
                        
                    />
                </ChatBody>
                <ChatFooter />
            </div>


        )
    }
}

const mapStateToProps = (state) => ({
    user_id : state.Login.user_id
})

export default connect(mapStateToProps, {
    menu_select_color
})(User)
