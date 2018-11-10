import React from 'react';
// import { Switch, Route } from 'react-router';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import { syncHistoryWithStore } from 'react-router-redux'

// import containers 
import Login from 'containers/Login';
import LogOut from 'containers/LogOut';
import Menu from '../containers/Menu';

import * as Icu from '../containers/icu';
import * as Imessage from '../containers/imessage';
import Setting from 'containers/Setting';

import Notice from 'containers/Notice'

// import RR routes 
import { reactRouterList as routes } from 'lib/api';



export default (props) => {
    console.log(props)
    return (
        <Router>
            <div >

                <Switch>
                    <Route exact path={routes.LOGIN} component={Login} />
                    <Route exact path={routes.LOGOUT} component={LogOut} />
                    <Route path={routes.ROOT} component={Menu} />
                </Switch>
                <div style={{ marginLeft: 100 }} >
                    <Switch>
                        {/* <Route path={routes.TEST2} component={props.match.params.type['User']} /> */}
                        <Route path={routes.ICU_USER} component={Icu.User} />
                        <Route path={routes.ICU_CHAT} component={Icu.Chat} />
                        <Route path={routes.IMESSAGE_CHAT} component={Imessage.Chat} />
                        <Route path={routes.NOTICE} component={Notice} />
                        <Route path={routes.SETTING} component={Setting} />

                    </Switch>
                    <div style={{ marginLeft: 200, borderLeft: "1px solid #000" }}>
                        <Route
                            path={routes.ICU_CHAT_PAGE}
                            component={Icu.ChatPage}
                        />
                    </div>
                    {/* <Switch>
                    <Route path={routes.ICU} component={Icu} />
                    <Route path={routes.ICU} component={Icu} />
                </Switch>  */}
                </div>




            </div>
        </Router>
    )
}



