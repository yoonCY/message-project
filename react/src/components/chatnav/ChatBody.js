import React from 'react'
import styled from 'styled-components';

const BodyArea = styled.div`
    position : absolute;
    ${'' /* background : #4d394b; */}
    background : #fff;
    top : 30px;
    width : 200px;
    max-height : 100%;
    bottom: ${
        props => props.bottom ? props.bottom+"px" : "70px"
    }
    overflow-y : scroll;
    ::-webkit-scrollbar {
        -webkit-appearance: none;
    }
`;

export default (props) => {

    const {
        bottom
    } = props;

    return (
        <BodyArea 
            bottom={bottom}
        >
            {props.children}
        </BodyArea>
    )
}
