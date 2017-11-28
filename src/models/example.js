
import {
  getFormInfo
} from '../services/example';
export default {

  namespace: 'example',

  state: {
    formInfo = {}
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      history.listen( history2 => {
        console.log('history==>', history2);
      })
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
    *getForm(action, {call, put}){

    }
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
