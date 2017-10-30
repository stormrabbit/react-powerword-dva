// import * as allRoutes from '../containers/index';

const routes = [{
    path: '/',
    comp: 'HostPage',
    compName: '主页',
},{
    path: '/about',
    comp: 'About',
    compName: '关于'
}, {
    path: '*',
    comp: 'NotFound',
    compName: '未找到',
    hidden: 1
},];

// const getAllRoutes = () => {
//     console.log(Object.keys(allRoutes))
//     // allRoutes.map( route => console.log('route==>', route));
// }
export default {routes} ;