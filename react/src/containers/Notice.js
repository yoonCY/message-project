import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { menu_select_color } from 'actions/DisplayAction'

import {
    NoticeBody
} from 'components/notice'

import { Media, Nav } from 'reactstrap';

import styled from 'styled-components';

const Container = styled.div`
    padding : 0 10px 10px 10px;
`

const NotifyTitle = styled.div`
    margin : 0px 0 10px 0;
    padding : 10px;
    line-height: 20px;
    min-height: 20px;
    padding-bottom: 2px;
    vertical-align: bottom;
    border-bottom : 1px solid #000;
`

export class Notice extends Component {

    constructor(props) {
        super(props)


        this.props.menu_select_color("#FFF");
    }

    render() {
        return (
            <Container>
                <NotifyTitle>
                    내 알림
                </NotifyTitle>
                <NoticeBody/>
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, {
    menu_select_color
})(Notice)
