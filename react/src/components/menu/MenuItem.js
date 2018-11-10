import React from 'react'

// style
import styled from 'styled-components';




const ItemContainer = styled.div`    
    width : 100%;
    background : ${
  props => (props.MenuTab === props.indexKey) ? props.MenuSelectColor : props.MenuColor
  };
    
    padding : 10px 2px 2px 2px;
`;


const ItemArea = styled.div`
    padding : 2px;
    font-size : 12px;
    color : ${
  props => props.MenuTextColor ? props.MenuTextColor : "#888287"
  };
`

const ItemText = styled.div`
    display : inline;
    padding-left : 8px;
`

export default (props) => {

  const {
    MenuColor,
    MenuSelectColor,
    MenuTextColor,
    MenuName,
    onClick,
    MenuTab,
    indexKey,
    Tag

  } = props;

  

  return (
    <ItemContainer
      MenuColor={MenuColor}
      MenuSelectColor={MenuSelectColor}
      MenuTextColor={MenuTextColor}
      MenuTab={MenuTab}
      indexKey={indexKey}
      onClick={() => onClick(indexKey)}
    >


      <ItemArea MenuTextColor={MenuTextColor} >
        
        <Tag size="20" />

        <ItemText>
          {MenuName}
        </ItemText>

      </ItemArea>

    </ItemContainer>
  )
}
