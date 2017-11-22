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
    *takeFork({payload}, sagas) {
      console.log('takeFork==>', payload);
      const test = yield payload.done;
      console.log('test==>', test);
    },
    *fetch({ payload }, { call, put, fork }) {  // eslint-disable-line
      // console.log('delay==>', delay);
      const delay = time => new Promise ( res => {
        console.log('call delaying...' + time);
        setTimeout(() => res( 'call' + time + 'is delay over!'), time);
      });
      const delay2 = time => new Promise ( res => {
        console.log('fork delaying...' + time);
        setTimeout(() => res( 'fork' + time + 'is delay over!'), time);
      })

      // const tsk = yield fork(delay, 5000);
      // const tsk2 = yield fork(delay, 6000);
      // const tsk3 = yield fork(delay, 7000);
      // const tsk4 = yield fork(delay , 8000);
      // yield put({
      //   type: 'takeFork',
      //   payload: tsk
      // });
      // console.log('tsk==>', tsk);
      // const sleep = function (time) {
      //   return new Promise(function (resolve, reject) {
      //     setTimeout(function () {
      //       resolve();
      //     }, time);
      //   })
      // };
      const arrs = [];
      for (let i =0;i< 4;i ++){
        arrs.push(call(delay, (5+i) * 1000))
      }
      const arrs2 = [];
      for (let i =0;i< 4;i ++){
        arrs2.push(yield fork(delay2, (5+i) * 1000))
      }
      // const forkAction = (tsk) => {
      //   return put({
      //     type: 'takeFork',
      //     payload: tsk
      //   });
      // }

      // for (let i in arrs2) {
      //   yield forkAction(arrs2[i]);
      // }
      const [cll1, cll2 ,cll3, cll4] = arrs;
      console.log(yield cll1);
      console.log(yield cll2);
      console.log(yield cll3);
      console.log(yield cll4);
      const [tsk1,tsk2, tsk3, tsk4] = arrs2;
      console.log(yield tsk1.done);
      console.log(yield tsk2.done);
      console.log(yield tsk3.done);
      console.log(yield tsk4.done);    
      // if(tsk1.isRunning()) {
      //   tsk1.cancel();
      // }
      // console.log(tsk1.isRunning())
      // yield put({
      //   type: 'takeFork',
      //   payload: arrs2[1]
      // });
      // yield put({
      //   type: 'takeFork',
      //   payload: arrs2[2]
      // });
      // yield put({
      //   type: 'takeFork',
      //   payload: arrs2[3]
      // });
      
      // arrs2.forEach(tsk => yield put({
      //   type: 'takeFork',
      //   payload: tsk
      // }))
      // const [tsk1 ,tsk2 ,tsk3 ,tsk4] = yield arrs2;
      // arrs2.forEach( yi)
      // console.log('tsk==>', tsk1);
      // console.log('tsk==>', tsk2);
      // console.log('tsk==>', tsk3);
      // console.log('tsk==>', tsk4);
      // const msg1 = yield call(delay, 5000);
      // const msg2 = yield call(delay, 5000);
      // const msg3 = yield call(delay, 5000);
      // const msg4 = yield call(delay, 5000);
      // const [msg1, msg2, msg3, msg4] = yield arrs;
      // console.log('msg==>over', msg1);
      // console.log('msg==>over', msg2);
      // console.log('msg==>over', msg3);
      // console.log('msg==>over', msg4);
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
