import React from 'react'

// style
import styled from 'styled-components';

const Container = styled.div`    
    width : 100%;
    background : ${
      props => props.MenuColor ? props.MenuColor : "#271d26"
    };
`;

const MenuArea = styled.div`
  height: 100vh;
`



export default ( props ) => {

  const {
    MenuColor 
  } = props;

  return (
    <Container
      MenuColor={MenuColor}
    >
      <MenuArea>
        {props.children}
      </MenuArea>
      
    </Container>
  )
}

