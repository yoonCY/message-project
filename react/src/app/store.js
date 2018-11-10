import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { createBrowserHistory } from 'history'
import thunk from 'redux-thunk';

import Reducers from './Reducers';
// const store = createStore(Reducers);

const history = createBrowserHistory();
const reduxRouterMiddleware = routerMiddleware( history );
const middleware = [thunk, reduxRouterMiddleware];


const store = createStore(
    Reducers,
    compose(applyMiddleware(...middleware), window.devToolsExtension ? window.devToolsExtension() : f => f)
);

export { store, history };