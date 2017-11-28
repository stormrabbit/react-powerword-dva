import React from 'react';
import {
  Form
} from 'antd';

export const zeroBuilder = (formItems = [], buildItemFunc, formClass, styles) => {

  const ZeroForm = props => {
    return (
      <Form className={formClass} style= {styles}>
        {
          formItems.map( formItem => buildItemFunc(formItem, props.form))
        }
      </Form>
    );
  }

  return Form.create()(ZeroForm)
}