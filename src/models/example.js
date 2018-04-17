
export default {

  namespace: 'example',

  state: {
    number: 0 
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      return history.listen(({pathname, query}) => {
          if(pathname === '/') {
            dispatch({
              type: 'init'
            })
          }
      });      
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

//   const reducer = (state =0, action) => {
//     switch (action.type) {
//         case 'ADD':
//             return state + 1;
//         case 'MINUS':
//             return state - 1;
//         default:
//             return state ;
//     }
//   }
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
    // +1
    add(state, action) {
      return {number: state.number + 1}
    },
    // -1
    minus(state, action) {
      return {number: state.number - 1}
    },
    init(state, acction) {
      return {number: 0}
    }
  },

};
