import React from 'react';
import styles from './Menu.css';
import { Menu } from 'antd';
import { routes } from '../../../routes/routes';
function TopMenu() {
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['2']}
      style={{ lineHeight: '64px' }}
    >
      {
        routes.map((route, index) => {
          if(!route.hidden){
            return (<Menu.Item key={index+1}>{route.compName}</Menu.Item>);
          }
        })
      }
      </Menu>
  );
}

export default TopMenu;
