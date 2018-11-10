import React from 'react'
import { Modal, ModalBody, ModalFooter } from 'reactstrap';

import styled from 'styled-components';

import { Search } from 'styled-icons/feather/Search'

const TitleArea = styled.div`
    width : 100%;   
    padding : 10px;
    border-bottom : 1px solid #000;
`

const TitleTextBox = styled.input`
    width : 80%;
    margin-left : 10px;
    padding : 10px;
    border : 0px;
`


export default (props) => {

    const {
        toggle,
        searchModal,
        targetID
    } = props;
    //className={this.props.className}
    return (
        <div>
            <Modal isOpen={searchModal} toggle={toggle} className="modal-lg" >
                <TitleArea toggle={toggle}>
                    <Search size="19" />
                    <TitleTextBox
                        placeholder={`Search ${targetID} `}
                    />

                </TitleArea>

                <ModalBody>
                    검색어들
                </ModalBody>
                <ModalFooter>
                    {/* <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button> */}
                </ModalFooter>
            </Modal>
        </div>
    )
}
