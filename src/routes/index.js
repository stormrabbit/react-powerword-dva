import React from 'react';
import { Router, Route, IndexRoute } from 'dva/router';
// import {App, HostPage, NotFound} from '../containers/index';
import * as allRoutes from '../containers/index';
import { routes } from './routes';
function RouterConfig({ history }) {
  
  return (
    <Router history={history}>
      <Route path="/" component={allRoutes.App} >
        {
          routes.map((route, index) => {
            return (index === 0 ? <IndexRoute component={allRoutes[route.comp]} key={index} /> :
              <Route path={route.path} component={route.comp} key={index} />);
          })
        }
      </Route>
    </Router>
  );
}

export default RouterConfig;
