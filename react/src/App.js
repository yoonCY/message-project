import React, { Component } from 'react';

import { Provider } from 'react-redux';
// import { ConnectedRouter } from 'react-router-redux';

import Routes from './app/Routes';

import styled from 'styled-components';

// import { store, history } from './app/store';
import { store } from './app/store';


const Root = styled.div`
    position : absolute;
    width : 100%;
    height : 100vh;
    top : 0;
    margin : 0;
    padding : 0;
    
`;

/*
<Root>
                <Provider store={store.store}>
                    <ConnectedRouter history={store.history}>
                        <Routes />
                    </ConnectedRouter>
                </Provider>
            </Root>
*/

class App extends Component {

    render() {
        return (
                <Provider store={store}>
                <Root>
                    <Routes store={store}/>
                </Root>
                </Provider>
        );
    }
}


export default App;
