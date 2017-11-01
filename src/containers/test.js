import React from 'react';
import { connect } from 'dva';
// import styles from './NoteTemplateDetail.less';
import {
  Form,
  Input
} from 'antd';
import FormItemBuilder from '../utils/FormItemBuilder';

const FormItem = Form.Item;

function Test(props) {
  const {
        getFieldDecorator
      } = props.form;

  console.log('hello,builder==>\n', JSON.stringify(FormItemBuilder
    .create('hello').addParams('name', 'world').build()))
  return (
    <Form>
      <FormItem>
        {getFieldDecorator('test')(<Input />)}
      </FormItem>
    </Form>
  );
}

function mapStateToProps(store) {
  return { store };
}

export default Form.create()(connect(mapStateToProps)(Test));
