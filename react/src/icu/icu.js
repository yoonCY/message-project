import React, { Component } from 'react'
import { connect } from 'react-redux'

// load Components

// router 
import { Link } from 'react-router-dom';

// style
import styled from 'styled-components';

const Container = styled.div`
  
`

export class Icu extends Component {

  render() {  
    return (
      <Container>test</Container>
      
    )
}
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Icu)
