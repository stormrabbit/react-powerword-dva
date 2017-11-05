import React from 'react';
import { Router } from 'dva/router';
import { ABook } from '../containers/index';
import { txtTools } from 'eschew-materials';
const test1 = require('../containers/About/About');
const containers   = require('../containers');
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
  // console.log('require.ensure==>', require.ensure);

  const displayNoneArr = { ABook: 1, HostPage: 1, NotFound: 1 };

  const buildRoutes = () => {
    const routeArr = [];
    console.log('3==>', containers);
    Object.keys(containers).filter(key => !displayNoneArr[key]).map(key => {

      const path = `/${txtTools.head2LowerCase(key)}`;
      const comp = key;
      const compName = key;
      routeArr.push({ path, comp });
    })
    return routeArr;
  }

  const routes2 = [
  //   {
  //   path: '/',
  //   comp: 'HostPage',
  //   compName: '主页',
  // },
  ...buildRoutes(),
  // {
  //     path: '/test',
  //     comp: 'Test',
  //     compName: '测试'
  // }, {
  //     path: '/about',
  //     comp: 'About',
  //     compName: '关于'
  // },
  {
    path: '*',
    comp: 'NotFound',
    compName: '未找到',
    hidden: 1
  }];

  console.log('2==>', routes2);
  const temp = (obj = {}) => {
    const {
      path = '/about',
      comp = 'About'
    } = obj;
    // console.log('test2==>', test2);
    const test3 = 't3';
    return {
      path,
      getComponent(nextState, callback) {
        require.ensure([], () => {
          // registerModel(app, require('../models/example'))
          callback(null, contaners[comp])
        }, '')
      }
    }


  };
  const temp3 = () => {
    const ret = [];
    routes2.map (rt => {
      ret.push( temp(rt));
    })
    return temp3;
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
        ...temp3
        // temp(),
        // temp({ path: '/test', comp: 'Test' }),
        // temp({ path: '*', comp: 'NotFound' })
        // {
        //   path: '/about',
        //   getComponent(nextState, callback) {
        //     require.ensure([], () => {
        //       // registerModel(app, require('../models/example'))
        //       callback(null, test1)
        //     }, 'About')
        //   }
        // },
        // buildRoute(RouteBuilder.create('/about')
        // .addContainerName('About')
        // .addContainerPath('../containers/About/About')
        // .build()),
        // {
        //   path: '*',
        //   getComponent(nextState, cb) {
        //     require.ensure([], require => {
        //       cb(null, require('../containers/NotFound/NotFound'))
        //     }, 'NotFound')
        //   }
        // }
      ],
    }
  ];

  return <Router history={history} routes={routes} />;
}

export default RouterConfig;