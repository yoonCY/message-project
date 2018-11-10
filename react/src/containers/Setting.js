import React, { Component } from 'react';
import { connect } from 'react-redux';

// components 
import { Header } from '../components/setting';
import { menu_select_color } from '../actions/DisplayAction'

class Setting extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
        
        this.props.menu_select_color("#FFF");
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {

        const {
            activeTab 
        } = this.state;

        return (
            <div>
                <Header
                    activeTab={activeTab}
                    onClick={this.toggle}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log("state", state)
    return {

    };
}

export default connect(
    mapStateToProps,
    {menu_select_color}
)(Setting);