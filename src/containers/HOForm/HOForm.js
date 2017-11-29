import React from 'react';
import styles from './HOForm.css';
import {
  Input,
  Form,
  Button
} from 'antd';
import {connect} from 'dva';
const FormItem = Form.Item;
import createBuilder from '../../utils/createBuilder';
import FormItemBuilder from '../../utils/formItemBuilder';
function HOForm(props) {

  // const ITEMS = {
  //   input: Input
  // };
  // const {
  //   example: {
  //     formInfo 
  //   }
  // } = props;
  // // console.log('example==>', example);
  // const {
  //   id = 'tt',
  //   childNode
  // } = formInfo;
  // let tempItem =  FormItemBuilder
  //                   .create(id);
  // if(!!childNode) {
  //   tempItem = tempItem.setChildNode(ITEMS[childNode]).build();
  // } else {
  //   tempItem = tempItem.setChild(<div />).build();
  // }
                    
  const tempItem = FormItemBuilder
                  .create('test')
                  .setChild(<Input />)
                  // .setChildNode(Input)
                  .build();
  // const tempItem = 
  // console.log(tempItem);
  const tempBuild = (form, formItems) => {
    const {
      getFieldDecorator
    } = form;

    return formItems.map(formItem => {
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
    })
  };

  const {
    builder,
    formApi
  } = createBuilder(tempBuild, styles.normal);
  const MyForm = builder([tempItem]);
  const handleClick = () => {
    const {
      validateFields
    } = formApi();
    if(!!validateFields) {
      validateFields( (err, values) => {
        if(err) {
          return;
        }
        console.log('values==>', values);
      });
    }
  }
  return (
    <div>
      <MyForm {...props}/>
      <Button onClick={() => handleClick() }>测试</Button>
    </div>
  );
}

const mapStateToProps = store => ({example: store.example})
export default connect(mapStateToProps) (HOForm);
