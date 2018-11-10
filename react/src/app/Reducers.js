import { combineReducers } from 'redux';
import { routerReducer  } from 'react-router-redux';

import Login from '../reducers/Login';
import Icu from '../reducers/Icu';
import Display from '../reducers/Display';

const rootReducer = combineReducers({
    router : routerReducer,
    Login,
    Icu,
    Display
});

export default rootReducer;