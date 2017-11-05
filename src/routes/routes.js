import * as containers from '../containers/index';
import { txtTools } from 'eschew-materials';
console.log('allRoutes==>',containers.default); 

const displayNoneArr = { ABook: 1, HostPage: 1, NotFound: 1 };

const buildRoutes = () => {
    const routeArr = [];
    // console.log(allRoutes);
    Object.keys(containers).filter(key => !displayNoneArr[key]).map(key => {

        const path = txtTools.head2LowerCase(key);
        const comp = key;
        const compName = key;
        routeArr.push({ path, comp });
    })
    return routeArr;
}
const routes = [
    {
    path: '/',
    comp: 'HostPage',
    compName: '主页',
},
// ...buildRoutes(),
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

console.log('route==>', routes);
// const getAllRoutes = () => {
//     console.log(Object.keys(allRoutes))
//     // allRoutes.map( route => console.log('route==>', route));
// }
export default { routes };