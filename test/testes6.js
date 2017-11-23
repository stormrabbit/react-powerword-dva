import { extra_func } from '../src_node/proxy/dynamic/proxy_demo';
import { extra_obj, custom_func } from '../src_node/proxy/dynamic/proxy_demo2';
import {
  store,
  addMiddleware
} from '../src_node/proxy/redux/index';
// /* demo 1*/
// const fn = (a, b) => console.log(a + b);

// fn(1, 2);

// const extrFn = extra_func(fn);

// extrFn(1, 2);

// const obj = {
//   a: 1,
//   b: 2,
//   c: 3
// }

// /* demo 2*/
// const obj2 = extra_obj(Object.assign({}, obj));

// console.log(obj.toString());
// console.log(obj2.toString());

// /* demo 3*/
// const obj3 = {
//   word: 'hello, world!',
//   showWord: function () {
//     console.log(this.word);
//   }
// }

// custom_func(obj3, 'showWord').showWord();


const initState = store.getState();
console.log('init==>', initState);
store.dispatch({type: '+'});

const nextState = store.getState();
console.log('next==>', nextState);

addMiddleware();

store.dispatch({type: '+'});
console.log('third==>', store.getState())