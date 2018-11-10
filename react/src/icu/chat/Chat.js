import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Chat extends Component {

  render() {
    return (
      <div>
        test1
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat)
