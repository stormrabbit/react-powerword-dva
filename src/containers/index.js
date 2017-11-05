// export ABook from './ABook/ABook';
// export HostPage from './HostPage/HostPage';
// export NotFound from './NotFound/NotFound';
// export About from './About/About';
// export Test from './test';

import ABook from './ABook/ABook';
import HostPage from './HostPage/HostPage';
import NotFound from './NotFound/NotFound';
import About from './About/About';
import Test from './Test';


// const buildComp = (compName) => {
//     return {comp:compName, path: `/${compName.name}`}
// }

// // console.log('test==>', ABook.name);
// const containers = {};
// [ABook, HostPage, NotFound, About, Test].map( container => {
//     console.log('container.name==>', container.name)
//     containers[container.name] = buildComp(container);
// })

const containers = {
  ABook, HostPage, Test, About, NotFound
}
// export default containers;

module.exports = containers;