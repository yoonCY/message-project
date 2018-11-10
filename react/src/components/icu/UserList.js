import React from 'react'

import { Link } from 'react-router-dom'

// style
import styled from 'styled-components';
import { Circle } from 'styled-icons/fa-regular/Circle'
// import {
//     Button
// } from 'styled-button-component';


const ListCategory = styled.div`
  
  display : ${
    props => (props.OpenCategorys[props.index] === true) ? "block" : "none"
    };
  padding-left : 20px;
`;

const UserFix = styled.div`
    clear: both;
    margin : 10px 10px 10px 10px;
    font-size: 12px;
	font-weight: 100;
`;

const NameText = styled.div`
  color : #000;
`;

const UserStats = styled.div`
  color : #000;
  opacity : 0.7;
`;

const StatusCircle = Circle.extend`
    color: Green;
    background : Green;
    border-radius : 10px;
`;

const Categorys = ({ indexKey, name, onClick }) => {
    return (
        <UserFix
        
            block={true}
            sm={true}
            m="0 0 3px 0"
            onClick={() => onClick(indexKey)}
        >
            <NameText>
                {name}

            </NameText>
        </UserFix>
    )
}

const UserInfoLists = ( {data, keys, onClick} ) => {

    const Links = `/icu/user/${data.id}`;
    console.log("onClick::", onClick)
    return (
        // <Link to={Links} key={`Links_${keys}`} >
        //     <UserFix
        //         key={`ListName_${keys}`}
        //         name={data.name}
        //         extension={data.extension}
        //         // onClick={() => this.hendleOnClick(data.name, data.id)}
        //     >
        //         <NameText>
        //             {data.name} ({data.extension}) {data.level}

        //         </NameText>
        //         <UserStats>
        //             <StatusCircle size="10" /> online
        //         </UserStats>

        //     </UserFix>
        // </Link>
        <div onClick={ () => onClick( data.id )} >
            <UserFix
                key={`ListName_${keys}`}
                name={data.name}
                extension={data.extension}
                // onClick={() => this.hendleOnClick(data.name, data.id)}
            >
                <NameText>
                    {data.name} ({data.extension}) {data.level}

                </NameText>
                <UserStats>
                    <StatusCircle size="10" /> online
                </UserStats>

            </UserFix>
        </div>
    )
}

export default (props) => {

    const {
        List,
        CategoryClickEvent,
        OpenCategorys,
        onClick
    } = props;

    console.log("onClick" , onClick)

    return (
        <div>

            {
                Object.keys(List).map((category, index, array) => {

                    
                    let CategorysKey = `Categorys_${index}`;
                    let CategoryName = `- ${category} ( ${List[category].length} )`;

                    return (
                        <div key={`UserList_${index}`}>
                            <Categorys
                                key={CategorysKey}
                                name={CategoryName}
                                indexKey={index}
                                block={false}
                                sm={true}
                                m="0 0 3px 0"
                                onClick={CategoryClickEvent}
                            />
                            <ListCategory
                                key={`ListCategory_${index}`}
                                index={index}
                                OpenCategorys={OpenCategorys}
                            >
                                {
                                    List[category].map((row, index) => {

                                        let UserInfoListskey = `UserInfoListskeys_${index}`;
                                        return (
                                            <UserInfoLists
                                                data={row}
                                                keys={index}
                                                key={UserInfoListskey}
                                                onClick={onClick}
                                            />

                                        )
                                    })
                                }

                            </ListCategory>

                        </div>

                    )
                })
            }
        </div>
    )
}
