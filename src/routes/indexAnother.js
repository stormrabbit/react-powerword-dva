import React from 'react';
import { Router } from 'dva/router';
import {ABook} from '../containers/index';
import RouteBuilder from './routeBuilder';

const cached = {};

function registerModel(app, model) {
  if (!cached[model.namespace]) {
    app.model(model);
    cached[model.namespace] = 1;
  }
}

function RouterConfig({ history, app }) {
  // console.log('getComponent==>', getComponent);
  // console.log(        {
  //   path: '/test',
  //   getComponent(nextState, cb) {
  //     require.ensure([], require => {
  //       registerModel(app, require('../models/example'))
  //       cb(null, require('../containers/About/About'))
  //     }, 'About')
  //   }
  // });
  console.log('require.ensure==>', require.ensure);
  const buildRoute = (routeObj) => {
    const {
      path,
      containerPath,
      containerName
    } = routeObj;
    return {
      path,
      getComponent(nextState, callback) {
        require.ensure([], require => {
          // registerModel(app, require('../models/example'))
          callback(null, require(containerPath))
        }, containerName)
      }
    }
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
      childRoutes: [
        {
          path: '/test',
          getComponent(nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('../models/example'))
              cb(null, require('../containers/test'))
            }, 'Test')
          }
        },
        {
          path : '/about',
          getComponent(nextState, callback) {
            require.ensure([], require => {
              // registerModel(app, require('../models/example'))
              callback(null, require('../containers/About/About'))
            }, 'About')
          }
        },
        // buildRoute(RouteBuilder.create('/about')
        // .addContainerName('About')
        // .addContainerPath('../containers/About/About')
        // .build()),
        {
          path: '*',
          getComponent(nextState, cb) {
            require.ensure([], require => {
              cb(null, require('../containers/NotFound/NotFound'))
            }, 'NotFound')
          }
        }
      ],
    }
  ];

  return <Router history={history} routes={routes} />;
}

export default RouterConfig;