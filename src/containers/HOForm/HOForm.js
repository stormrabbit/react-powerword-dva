import React from 'react';
import styles from './HOForm.css';
import {
  Input,
  Form
} from 'antd';
import {connect} from 'dva';
const FormItem = Form.Item;
import {
  zeroBuilder
} from '../../utils/zeroBuilder';
import FormItemBuilder from '../../utils/formItemBuilder';
function HOForm(props) {

  const ITEMS = {
    input: Input
  };
  const {
    example: {
      formInfo 
    }
  } = props;
  // console.log('example==>', example);
  const {
    id = 'tt',
    childNode
  } = formInfo;
  let tempItem =  FormItemBuilder
                    .create(id);
  if(!!childNode) {
    tempItem = tempItem.setChildNode(ITEMS[childNode]).build();
  } else {
    tempItem = tempItem.setChild(<div />).build();
  }
                    
  // const tempItem = FormItemBuilder.create('test').setChildNode(Input).build();
  // const tempItem = 
  console.log(tempItem);
  const tempBuild = (formItem, form) => {
    const {
      getFieldDecorator
    } = form;
    const {
      id,
      child,
      options
    } = formItem;
    const {
      example
    } = props;
    return (<FormItem key={id}>
      {
        getFieldDecorator(id, options)(child)
      }
    </FormItem>);
  };
  const MyForm = zeroBuilder([tempItem], tempBuild);
  return (
    <div className={styles.normal}>
      <MyForm {...props} style={{width: '300px'}}/>
    </div>
  );
}

const mapStateToProps = store => ({example: store.example})
export default connect(mapStateToProps) (HOForm);
