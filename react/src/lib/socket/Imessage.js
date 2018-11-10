import React, { Component } from 'react'
import { connect } from 'react-redux'


export class Imessage extends Component {


  constructor(props) {
    super(props)

  }


  render() {
    return (
      <div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log( state.Login.userID );
  return {
    userID : state.Login.userID
  }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Imessage)
