import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import IndexPage from './modules/IndexPage/index.js';


render(
        <HashRouter>
        <Switch>
        	<Route path="/" component={IndexPage}/>
        	<Redirect to="/" />
        </Switch>
        </HashRouter>,
    document.getElementById("root")
)