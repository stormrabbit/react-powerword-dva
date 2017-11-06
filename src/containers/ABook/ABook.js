import React from 'react';
import styles from './ABook.css';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;
import {TopMenu} from '../../components/index';
import {parseURL} from '../../utils/utils';

function ABook(props) {
  const clientHeight = document.body.clientHeight;
  const path = parseURL( window.document.location.href).path;
  const currentPath = [];
  currentPath.push(path);
  return (
  <div>
    <Layout className="layout" style= {{width: '100%', position: 'absolute', top: '0px', bottom: '0px'}}>
      <Header>
        <div className="logo" />
        <TopMenu CurrentPath={currentPath}/>
      </Header>
      <Content className={styles.content}>
        <div className={styles.content2}>
        {props.children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        <a href='https://github.com/stormrabbit/powerword-init-dva'>powerword-init-dva</a> <a href='https://github.com/stormrabbit'>@龙骑将杨影枫</a>
      </Footer>
    </Layout>
  </div>
  );
}

export default ABook;
