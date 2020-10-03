import React from 'react'
import { List, Avatar, Space } from 'antd';

const ListItem = props => {

const { listData } = props


const IconText = ({ icon, text }) => (
    <Space>    
      {React.createElement(icon)}
      {text}
    </Space>
  );
  
    return (
      <List
      itemLayout="vertical"
      size="large"
      dataSource={listData}
      renderItem={item => (
        <List.Item
          className='list-item'
          key={item.title}
          actions={[
          ]}
          extra={
            <img
              className='book-card-img-very-small'
              width={272}
              alt="logo"
              src={props.bookImg}
            />
          }
        >
          <List.Item.Meta
            avatar={<Avatar src={props.avatar} />}
            title={<a href={item.href}>{item.title}</a>}
            description={item.description}
          />
          {item.content}
        </List.Item>
      )}
    />
      )
}

export default ListItem