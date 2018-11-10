import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import RightList from '../components/menu/RightList'

export class RightMenu extends Component {

    constructor(props) {
        super(props)

        this.state = {
            textHover: 0
        }
        this._onHoverEvent = this._onHoverEvent.bind(this);
    }


    _onHoverEvent(key) {

        this.setState({
            textHover: key
        })
    }

    render() {

        const {
            textHover 
        } = this.state;
        
        return (
            <div>
                <RightList
                    textHover={textHover}
                    onHoverEvent={this._onHoverEvent}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(RightMenu)
