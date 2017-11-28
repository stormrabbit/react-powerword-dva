import ABook from './ABook/ABook';
import HostPage from './HostPage/HostPage';
import NotFound from './NotFound/NotFound';
import HOForm from './HOForm/HOForm';
import About from './About/About';

import { txtTools } from 'eschew-materials';

const hiddenConstainers = { ABook, HostPage, NotFound };

const MenuBuilder = (function () {

  let instance;

  const init = () => {
    const obj = {};

    function addMenu(menuContainer, menuName) {
      obj[menuContainer] = menuName;
      return instance;
    }

    const build = () => {
      return obj;
    }
    return {
      addMenu,
      build
    }
  }
  return {
    getInstance: () => {
      if (!instance) {
        instance = init();
      }
      return instance;
    }
  }

}())


const displayMenus = MenuBuilder.getInstance()
  .addMenu('HOForm','定制表单')
  .addMenu('About', '关于')
  .build()

const buildMenus = (containers) => {
  const menus = [];
  menus.push({
    path: '/',
    comp: HostPage,
    compName: '主页',
  });

  Object.keys(containers).filter(key => !hiddenConstainers[key]).map(key => {
    const rtObj = {
      path: `/${txtTools.head2LowerCase(key)}`,
      comp: containers[key],
      compName: displayMenus[key]
    };
    menus.push(rtObj);
  });

  menus.push({
    path: '*',
    comp: NotFound,
    compName: '未找到',
    hidden: 1
  });
  return menus;
}

const containers = { ABook, HostPage,HOForm, About, NotFound};
const menus = buildMenus(containers);
containers.Menu = menus;

export default containers;