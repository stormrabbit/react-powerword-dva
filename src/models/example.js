// import {
//   delay
// } from '../services/forkService';
export default {

  namespace: 'example',

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      history.listen(({pathname, query}) => {
        if(pathname === '/about') {
          dispatch({type: 'fetch'});
        }
      })
    },
  },

  effects: {
    *fetch({ payload }, { call, put, fork }) {  // eslint-disable-line
      // console.log('delay==>', delay);
      const delay = time => new Promise ( res => {
        console.log('delaying...');
        setTimeout(() => res('delay over!'), time);
      })
      // const sleep = function (time) {
      //   return new Promise(function (resolve, reject) {
      //     setTimeout(function () {
      //       resolve();
      //     }, time);
      //   })
      // };
      const msg = yield call(delay, 5000);
      console.log('msg==>over', msg);
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
