import React from 'react';
import styles from './Menu.css';
import { Menu } from 'antd';
import { routes } from '../../../routes/routes';
import {connect} from 'dva';
import {routerRedux} from 'dva/router';

function TopMenu({CurrentPath, dispatch}) {
  const handeClick = (e) => {
    const {
      key
    } = e;
    dispatch(routerRedux.push(key));
  }

  return (
    <Menu
      theme="dark"
      mode="horizontal"
      onClick = {(e)=>{
        handeClick(e);
      }}
      selectedKeys={CurrentPath}
      style={{ lineHeight: '64px' }}
    >
      {
        routes.map((route, index) => {
          if(!route.hidden){
            return (<Menu.Item key={route.path} >{route.compName}</Menu.Item>);
          }
        })
      }
      </Menu>
  );
}

export default connect()(TopMenu);
