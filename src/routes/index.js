import React from 'react';
import { Router, Route, IndexRoute } from 'dva/router';
// import {App, HostPage, NotFound, About, Test} from '../containers/index';
import * as allRoutes from '../containers/index';
import { routes } from './routes';
function RouterConfig({ history }) {
  
  return (
    <Router history={history}>
      <Route path="/" component={allRoutes.ABook} >
        {
          routes.map((route, index) => {
            const rtItem = index === 0 ? IndexRoute : Route;
            // return <rtItem  path={route.path} component={allRoutes[route.comp]} key={index} />;
            return (index === 0 ? <IndexRoute component={allRoutes[route.comp]} key={index} /> :
              <Route path={route.path} component={allRoutes[route.comp]} key={index} />);
          })
        }
      </Route>
    </Router>
  );
}

export default RouterConfig;
