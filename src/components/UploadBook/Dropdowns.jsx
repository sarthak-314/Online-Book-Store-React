import React, { useState } from 'react'
import { Menu, Dropdown } from 'antd'
import { DownOutlined } from '@ant-design/icons'

const Dropdowns = (props) => {
    const [bookCondition, setBookCondition] = useState(0)
    const [bookCategory, setBookCategory] = useState(-1)

    
    const onBookConditionChange = optionValue => {
        setBookCondition(optionValue)
      }
      const onCategoryChange = optionValue => {
        setBookCategory(optionValue)
      }
  

    const bookConditionBaby = 
    <Menu>
      <Menu.Item onClick={() => onBookConditionChange(1)}>
        Almost New
      </Menu.Item>
      <Menu.Item onClick={() => onBookConditionChange(2)}>
        Good
      </Menu.Item>
      <Menu.Item onClick={() => onBookConditionChange(3)}>
        Old
      </Menu.Item>
    </Menu>

 const bookCatBaby = 
    <Menu>
      <Menu.Item onClick={() => onBookConditionChange(1)}>
        Cat A
      </Menu.Item>
      <Menu.Item onClick={() => onBookConditionChange(2)}>
        Cat B 
      </Menu.Item>
      <Menu.Item onClick={() => onBookConditionChange(3)}>
        Cat C
      </Menu.Item>
    </Menu>

    return (
        <div>
    <Dropdown overlay={bookCatBaby} style={{float: 'left', fontSize: '9px'}} class='form-group'>
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          Category <DownOutlined />
        </a>
      </Dropdown>
      <span style={{color: 'white'}}>
      eeeeeeeeeee
      </span>

     <Dropdown overlay={bookConditionBaby} style={{float: 'right', fontSize: '9px'}} class='form-group'>
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          Condition <DownOutlined />
        </a>
      </Dropdown>
    </div>
    )
}

export default Dropdowns