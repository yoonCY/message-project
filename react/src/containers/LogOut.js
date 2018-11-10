import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Redirect } from 'react-router-dom'

import {
    user_logout
  } from 'actions/LoginAction';

export class LogOut extends Component {


  constructor(props) {
    super(props)
  
    this.props.user_logout()

  }
  

  render() {
    return (
      <div>
        <Redirect to='/login' />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})


export default connect(mapStateToProps, {
    user_logout
})(LogOut)
