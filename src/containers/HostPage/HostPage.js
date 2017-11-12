import React from 'react';
import styles from './HostPage.css';
import * as containers from '../../containers';
import {Table} from 'antd';

function HostPage(props) {
  const { Menu } = containers.default;
  console.log('Menu==>', Menu);

  const filerNames = ['/', '/about', '*'];

  const columns = [
    {
      title: '路径',
      dataIndex: 'path',
      key: 'path'
    },
    {
      title: '组件名',
      dataIndex: 'compName',
      key: 'compName'
    }
  ]
  const gotoPage = (mItem) => {
    console.log('mItem==>', mItem);
  }



  console.log('this2==>', this);
  const this3 = (e) => console.log(e) 
  const temp = this3.bind('test');
  console.log('temp==>', temp);
  temp('嘿嘿 ');

  const this4 = (e) => {
    console.log(this);
    console.log('this4==>', e);
  }

  this4.apply(props, ['eeeeeee'])
  this4.call(props, 'eeee')
  this4.bind(props, 'eee')

  const temp1 = [1, 2, 3, 4, 5];
  const temp2 = [6, 7, 8, 9, 0];
  Array.prototype.push.apply(temp1, temp2);
  console.log(temp1);

  // dispatch.apply(props, ['eeee']);

  const tempX = (path) => {
    console.log(path)
  }

  tempX.bind(props, temp1);
  
  // console.log('bind==>', this3.bind(this));
  const handleClick = (item, index) => {
    console.log(item);
    console.log('this==>', this);
  }
  return (
    <div className={styles.normal} >
      Hello, HostPage
        <Table
          dataSource={Menu.filter( m => (filerNames.indexOf(m.path) === -1) )} 
          columns={columns} 
          onRowClick={handleClick.bind(this)}/>
    </div>
  );
}

export default HostPage;
