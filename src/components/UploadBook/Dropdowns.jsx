import React, { useState } from 'react'
import { Menu, Dropdown } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import { BOOK_CATEGORIES } from '../constants'

const Dropdowns = (props) => {
    const [bookCondition, setBookCondition] = useState(-1)
    const [bookCategory, setBookCategory] = useState(-1)

    const BOOK_CONDITION = {1 : 'Almost New', 2 : 'Good', 3 : 'Old'}
    // const BOOK_CATEGORY = {1: 'Cat A', 2: 'Cat B', 3: 'Cat C'}
    
    const onBookConditionChange = optionValue => {
        setBookCondition(optionValue)
        props.setBookCondition(optionValue)
      }
      const onBookCategoryChange = optionValue => {
        setBookCategory(optionValue)
        props.setBookCategory(optionValue)
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
      {BOOK_CATEGORIES.map((category, i) =>
        <Menu.Item onClick={() => onBookCategoryChange(i)}>
          {category}
        </Menu.Item>)}
    </Menu>

    return (
        <div>
    <Dropdown overlay={bookCatBaby} style={{float: 'left', fontSize: '9px'}} class='form-group'>
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
        {bookCategory == -1 ? 'Category': BOOK_CATEGORIES[bookCategory]} 
          <DownOutlined />
        </a>
      </Dropdown>
      <span style={{color: 'white'}}>
      eeeeeeeeeee
      </span>

     <Dropdown overlay={bookConditionBaby} style={{float: 'right', fontSize: '9px'}} class='form-group'>
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
        {bookCondition == -1 ? 'Book Condition': BOOK_CONDITION[bookCondition]} 
        <DownOutlined />
        </a>
      </Dropdown>
    </div>
    )
}

export default Dropdowns