import React, { Component } from 'react';

// redux 
import { Provider } from 'react-redux';
// import { ConnectedRouter } from 'react-router-redux';
// import { createStore } from 'redux';
import { createStore, applyMiddleware, compose } from 'redux';

// reducer
import rootReducer from './Reducers';
// routing
import Routes from './Routes';

import { rootReducer } from 'redux/rootReducer';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import { createHashHistory } from 'history';

// style
import styled from 'styled-components';
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

const reduxRouterMiddleware = routerMiddleware(createHashHistory());
const middleware = [thunk, reduxRouterMiddleware];

// const store = createStore(Reducers);
const store = createStore(
    rootReducer,
    compose(applyMiddleware(...middleware), window.devToolsExtension ? window.devToolsExtension() : f => f)
);

const Root = styled.div`
    position : absolute;
    width : 100%;
    height : 100vh;
    top : 0;
    margin : 0;
    padding : 0;
    
`;

const history = [];

class App extends Component {
    render() {
        return (
            <Root>
                <Provider store={store}>
                    <Routes />
                </Provider>


            </Root>
        );
    }
}

App.defaultProps = {
    histiory: history
};

export default App;
