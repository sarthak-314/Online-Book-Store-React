import React from 'react'
import {
  Form,
  Select,
  Input, 
  InputNumber,
  Switch,
  Radio,
  Slider,
  Button,
  Upload,
  Rate,
  Checkbox,
  Row,
  Col,
} from 'antd';

import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
const { Option } = Select;
const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};

const normFile = (e) => {
  console.log('Upload event:', e);

  if (Array.isArray(e)) {
    return e;
  }

  return e && e.fileList;
};

const Demo = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form
      name="validate_other"
      {...formItemLayout}
      onFinish={onFinish}
      initialValues={{
        ['input-number']: 3,
        ['checkbox-group']: ['A', 'B'],
        rate: 3.5,
      }}
    >

    <Form.Item name={['user', 'name']} label="Book Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item
        name="radio-button"
        label="Book Category"
        rules={[
          {
            required: true,
            message: 'Please pick an item!',
          },
        ]}
      >
        <Radio.Group>
          <Radio.Button value="a">Ficiton</Radio.Button>
          <Radio.Button value="b">Science</Radio.Button>
          <Radio.Button value="c">AI & Code</Radio.Button>
          <Radio.Button value="d">Philosophy</Radio.Button>
          <Radio.Button value="e">Biography</Radio.Button>
        </Radio.Group>
      </Form.Item>

      <Form.Item name="rate" label="Your Rating for Book">
        <Rate />
      </Form.Item>

      <Form.Item name={['user', 'email']} label="Review Title" rules={[{ type: 'email' }]}>
        <Input />
      </Form.Item>

      <Form.Item name={['user', 'introduction']} label="Review Content">
        <Input.TextArea rows={20}/>
      </Form.Item>
      
      
      <Form.Item
        wrapperCol={{
          span: 12,
          offset: 6,
        }}
      >
        <Button type="primary" htmlType="submit">
          Upload Review
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Demo


