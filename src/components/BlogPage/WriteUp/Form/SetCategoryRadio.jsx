import React from 'react'
import { Form, Radio } from 'antd'  

const RadioButton = props => {
    const { setCategory } = props
    return (
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
  
    )
}

export default RadioButton