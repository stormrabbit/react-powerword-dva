import React from 'react';
import {
  Form
} from 'antd';

export const zeroBuilder = (buildItemFunc, formClass, formCreater = Form.create()) => {
  const map = {};

  const formItems = []
  const builder = formItems => formCreater(props => {
    map.form = props.form;
    return (
      <Form className={formClass} style={styles}>
        {
          buildItemFunc(props.form, formItems)
        }
      </Form>
    );
  })
  const formApi = () => map.form;

  return {
    builder,
    formApi
  }
}