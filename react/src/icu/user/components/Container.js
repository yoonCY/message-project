import React from 'react'
import styled from 'styled-components';

const UserComponents = styled.div`
    position : absolute;
    background: #c0c0c0;
    top : 60px;
    width : 200px;
    max-height : 100%;
    bottom: 70px;
    ${'' /* height: 85vh; */}
    overflow-y : scroll;
    ::-webkit-scrollbar {
        -webkit-appearance: none;
    }
`;

export default ( props ) => {
  return (
    <UserComponents>
        {props.children}
    </UserComponents>
  )
}
