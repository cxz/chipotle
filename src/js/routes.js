import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import App from './containers/App';
import DashboardApp from './containers/DashboardApp';
import NotFoundView from './views/NotFoundView';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={DashboardApp} />
  
    {/* 
    <Route path="/:dashboard" component={DashboardPage} />
    */}
    
    <Route path="404" component={NotFoundView} />
    <Redirect from="*" to="404" />
  </Route>
);
