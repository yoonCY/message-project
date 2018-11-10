import React from 'react'

import styled from 'styled-components';

import { Search } from 'styled-icons/fa-solid/Search'

const RightMenuContainer = styled.div`
    
    right : 0;
    width : 20px;
    float : right;
    ${'' /* background : #271d26; */}
    height : 100vh;
`

// const MenuIconList = styled.div`
//     position : absolute;
//     right : 25px;
//     background : #fff;
//     width : 1px;
//     height : 100vh;
//     border-left : 1px solid #000;
// `

// const MenuListComponents = styled.div`

//     background : #fff;
//     float : right;
//     display : block;
//     width : 20px;
//     padding : 0px;
//     :hover {
//         background : #e8f5e4;
//     }
//     :active {
//         background : #e8f5e4;
//     }
// `

// const MenuItemText = styled.label`
//     display : ${
//         props => (props.textHover === props.MenuNumber) ? "inline" : "none"
//     };
//     display : inline;
//     font-size : 12px;
//     border-radius : 2px;
//     background : red;
//     ${'' /* z-index : ${
//         props => (props.textHover === props.MenuNumber) ? 100 : -1
//     }; */}

// `   

const MenuLists = [
    {
        Tag: Search,
        Label: "검색",
        Link: "test"
    },
    {
        Tag: Search,
        Label: "검색1",
        Link: "test"
    },
    {
        Tag: Search,
        Label: "검색2",
        Link: "test"
    }
]

const MenuIconBox = ( props ) => {

}

export default (props) => {

    const {
        textHover,
        onHoverEvent

    } = props;


    return (
        <RightMenuContainer>
        t
            {/* <MenuIconList/>
                {
                    MenuLists.map((row, index) => {

                        const keys = `RightMenus_${index}`;
                        const TagName = row.Tag;
                        const ItemIndex = index + 1;

                        console.log(textHover, ItemIndex)

                        return (

                            <div style={{ display: "block"}}>
                                <MenuItemText
                                    textHover={textHover}
                                    MenuNumber={ItemIndex}
                                >
                                    {row.Label}
                                </MenuItemText>
                                
                                <MenuListComponents
                                    onMouseOver={() => onHoverEvent(ItemIndex)}
                                    onMouseLeave={() => onHoverEvent(0)}
                                >
                                    <TagName
                                        size="18"
                                        color="#686664"
                                    />

                                </MenuListComponents>
                            </div>



                        );
                    })
                } */}
            
        </RightMenuContainer>
    )
}
