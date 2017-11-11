const buildFromCode = (formName, formFields) => `import React from 'react';
import {
  Form,
  Input,
  Button
} from 'antd';
import BaseItemBuilder from '../../utils/BaseItemBuilder';
const FormItem = Form.Item;
function ${formName}(props) {

  const {
       getFieldDecorator,
       getFieldsValue
    } = props.form;

  const {
    ${buildResponse(formFields)}
  } = props.${formName} || {};
  const buildItems = (arr) => {
    return arr.map((item, index) => {
      const {
        propName,
        labelName,
        options,
        child = <Input placeholder={\`\$\{propName\}\`} />
          } = item;
      return (<div key={index}>
        <FormItem>
          {
            getFieldDecorator(propName, options)(child)
          }
        </FormItem>
      </div>);
    })
  }

  const arr = [${getFields(formFields)}]

  const handleSubmit = () => {
    const formValues = getFieldsValue();

  }
  return (
    <div>
      <Form>
        {
          buildItems(arr)
        }
      </Form>
      <Button onClick={handleSubmit.bind(this)}>确定</Button>
    </div>
  );
}

export default Form.create()(${formName});
`

const getFields = (formFields) => formFields.map(formName => buildField(formName))

const buildField = (fieldName) => `BaseItemBuilder
.create('${fieldName}')
.build()\n`;

const buildResponse = (formFields) => formFields.map(formItem => `\n${formItem}`)
export {
  buildFromCode
}