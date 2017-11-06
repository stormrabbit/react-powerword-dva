import React from 'react';
import { Router } from 'dva/router';
import { ABook } from '../containers/index';
import * as containers from '../containers/index';
const childRoutes = containers.Menu;

const cached = {};

function registerModel(app, model) {
  if (!cached[model.namespace]) {
    app.model(model);
    cached[model.namespace] = 1;
  }
}



function RouterConfig({ history, app }) {

  const buildRoute = (rt) => {
    const {
      path,
      comp
    } = rt;
    return {
      path,
      getComponent(nextState, cb) {
        require.ensure([], require => {
          // registerModel(app, require('../models/example'))
          cb(null, comp)
        }, '')
      }
    }
  }

  const buildChildRoutes = () => {
    const returnArr = [];
    childRoutes.map(rt => {
      if (rt.comp !== 'HostPage') {
        returnArr.push(buildRoute(rt));
      }
    });
    return returnArr;
  }

  const routes = [
    {
      path: '/',
      component: ABook,
      getIndexRoute(nextState, cb) {
        require.ensure([], require => {
          cb(null, { component: require('../containers/HostPage/HostPage') })
        })
      },
      childRoutes: buildChildRoutes(),
    }
  ];

  return <Router history={history} routes={routes} />;
}

export default RouterConfig;