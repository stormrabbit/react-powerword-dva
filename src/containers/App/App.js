import React from 'react';
import styles from './App.css';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;
import {TopMenu} from '../../components/index';
function IndexPage(props) {
  const clientHeight = document.body.clientHeight;
  console.log('clientHeight==>',clientHeight );
  console.log('css')
  return (
  <div>
    <Layout className="layout" style= {{width: '100%', position: 'absolute', top: '0px', bottom: '0px'}}>
      <Header>
        <div className="logo" />
        <TopMenu />
      </Header>
      <Content className={styles.content}>
        {/* <div className="content2" style={{minHeight: clientHeight}}> */}
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

export default (IndexPage);
