
import {
  getFormInfo
} from '../services/example';
export default {

  namespace: 'example',

  state: {
    formInfo: {}
  },

  subscriptions: {
    setup({ dispatch, history }) {
      // return history.listen(({ pathname, query }) => {
      //     if (pathname === '/hOForm') {
      //         console.log('pathname==>', pathname);
      //         dispatch({ type: 'getForm' });
      //     }
      // });
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
    *getForm(action, { call, put }) {
      const data = yield call(getFormInfo);
      console.log(data);
      yield put({
        type: 'save',
        payload: { formInfo: data.data }
      })
    }
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
