import React, { Component } from 'react'
import { connect } from 'react-redux'

// Post 
import Post from '../../lib/Post';

// components 
import {
  Container,
  List
} from './components';

export class User extends Component {

  constructor(props) {
    super(props)

    this.state = {
      UserName : [],
      UserTel : [],
      UserList: {},
      List : {},
      OpenCategorys : [],
      searchValue : this.props.searchUser
    }

    this.MemberList = this.MemberList.bind(this)
    // this.onClickEvent = this.onClickEvent.bind(this);
  }

  componentWillReceiveProps( nextprops ){

        
    const List = this.state.UserList;
    const filterData = [];
    if( nextprops.searchUser === '' ){
        this.setState({
            List : List
        })
        return;
    }
    Object.keys(List).map( ( row ) => {
        filterData[ row ] = List[row].filter( ( item ) => {
            return item.name.toLowerCase().search(
                nextprops.searchUser.toLowerCase()
            ) !== -1;      
        });
    })
    
    this.setState({
        List : filterData
    })

} 

  MemberList = async () => {

    const POST_data = await Post( "https://www.ifamily.co.kr/icard/sub/get_member_list" );
    const List = POST_data.data.list;

    const ListCount = Object.keys(List.user_list).length;

    let CategoryDisplay = [];

    for (let i = 1; i <= ListCount; i++) {
      CategoryDisplay[i] = false;
    }

    this.setState({
      ...this.state,
      CloseCategorys: CategoryDisplay,
      UserList: List.user_list,
      List: List.user_list,

      UserName: List.user_name,
      UserTel: List.user_tel
    });
  }

  render() {
    return (
      <Container>
        test1
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(User)
