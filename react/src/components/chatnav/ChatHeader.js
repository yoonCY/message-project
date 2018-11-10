import React from 'react'
import styled from 'styled-components';

import { Search } from 'styled-icons/fa-solid/Search'


const HeaderComponet = styled.div`
    position : absolute;
    justify-content: space-between;
    align-items: center;
    ${'' /* background: #4d394b; */}
    background: #FFF;
    ${'' /* padding: 5px 5px 5px 0px; */}
    box-sizing: border-box;
    color: #ffffff;
    top: 0;
    width: 200px;
    
    height : 30px;
    z-index : 5;
    
    
`;


const HeaderTitle = styled.div`
    
    ${'' /* padding: 10px; */}
    width : 100%;
    font-size : 16px;
    border-bottom : 1px solid #000;
`;

const Input = styled.input`
    ${'' /* border-radius: 10px; */}
    border: none;
    color: black;
    ${'' /* width : 100%; */}
    width : 180px;
    
    padding: 5px 15px 5px 35px;
    
    ${'' /* background: #6A6C75; */}
  
    font-size: 12px;
`

const FiexSearch = Search.extend`
    position: absolute;
    top : 0px;
    left: 2px;
    color : black;
    z-index : 10;
    padding : 5px 0 0 4px;
    opacity : 0.6;
    
`;

export default ( props ) => {

    const {
        onKeyUp
    } = props;

    return (
        <HeaderComponet>
            <HeaderTitle>
                <FiexSearch size="20" />
                <Input
                    type="text"
                    placeholder="이름을 입력해주세요."
                    onKeyUp={(event) => {
                        onKeyUp(event.target.value)
                    }}
                />
            </HeaderTitle>
        </HeaderComponet>
    )
}
