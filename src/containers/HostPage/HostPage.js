import React from 'react';
import styles from './HostPage.css';
import {
  connect
} from 'dva';
import { Button } from 'antd';
function HostPage({
  number, // 值
  add, // 加方法
  minus // 减方法
}) {
  return (
    <div className={styles.normal} >  
      <div>{number}</div>
      <Button onClick={()=> add()}>+</Button>
      <Button onClick={()=> minus()}>-</Button>
    </div>
  );
}

const mapStateToProps = (store) => {
  // store 中有个 example
  const {
    example: {
      number
    } = {}
  } = store;
  return {number };
};

const mapDispatchToProps = (dispatch) => ({
  add: () => dispatch({type: 'example/add'}),
  minus: () => dispatch({type: 'example/minus'})
})

export default connect(mapStateToProps, mapDispatchToProps)(HostPage);
