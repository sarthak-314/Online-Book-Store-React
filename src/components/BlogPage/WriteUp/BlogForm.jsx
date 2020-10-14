import React from 'react'
import { Form, Input, Radio, Button, Rate } from 'antd';
import SetCategoryRadio from './Form/SetCategoryRadio'

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
  
        <SetCategoryRadio setCategory={setCategory}/>

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