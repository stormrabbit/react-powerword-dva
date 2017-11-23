import {createStore, applyMiddleware} from 'redux';

const myReducer = (state = 0, action) => {
  const {
    type
  } = action;
  switch (type) {
    case '+':
      return state + 1;
    case '-':
      return state - 1;
    default:
      return state;
  }
}

const myMiddleware = ({disptach, getState}) => next => action => {
  const {
    type
  } = action;
  if(type === '+') {
    console.log('做加法：');
  } else {
    console.log('做减法');
  }
  next(action);
}

const store = createStore(myReducer
  // , applyMiddleware(myMiddleware)
);

const addMiddleware = () => {
  const next = store.dispatch;

  const dispatch = (action) => {
    const {type} = action ;
    if( type === '+') {
      next({type: '-'})
    }else{
      next(action);
    }
  }
  store.dispatch = dispatch;
}

export {
  store,
  addMiddleware
}