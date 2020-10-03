import React from 'react'
import { Form, Input, Radio, Button, Rate } from 'antd';


const BlogForm = props => {

    const { setBookTitle, setCategory, setRating, setTitle, setContent, onSubmitHandler } = props
    const formItemLayout = {
        labelCol: {
          span: 6,
        },
        wrapperCol: {
          span: 14,
        },
      };
      
    return (
        <Form
        name="validate_other"
        {...formItemLayout}
        initialValues={{
          ['input-number']: 3,
          ['checkbox-group']: ['A', 'B'],
          rate: 3.5,
        }}
      >
  
      <Form.Item name={['Book Title']} label="Book Title" rules={[{ required: true }]}>
          <Input onChange = {e => setBookTitle(e.target.value)}/>
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
            <Radio.Button value="a" onClick={() => setCategory(1)}>Fiction</Radio.Button>
            <Radio.Button value="b" onClick={() => setCategory(2)}>Science</Radio.Button>
            <Radio.Button value="c" onClick={() => setCategory(3)}>AI & Code</Radio.Button>
            <Radio.Button value="d" onClick={() => setCategory(4)}>Philosophy</Radio.Button>
            <Radio.Button value="e" onClick={() => setCategory(5)}>Biography</Radio.Button>
          </Radio.Group>
        </Form.Item>
  
        <Form.Item name="rate" label="Your Rating for Book">
          <Rate />
        </Form.Item>
  
        <Form.Item name={['Review', 'Title']} label="Review Title">
          <Input onChange={e => setTitle(e.target.value)}/>
        </Form.Item>
  
        <Form.Item name={['Review', 'Content']} label="Review Content">
          <Input.TextArea rows={20} onChange={e => setContent(e.target.value)}/>
        </Form.Item>
        
        
        <Form.Item
          wrapperCol={{
            span: 12,
            offset: 6,
          }}
        >
          <Button type="primary" htmlType="submit" onClick={e => onSubmitHandler(e)}>
            Upload Review
          </Button>
        </Form.Item>
      </Form>
    )
}

export default BlogForm