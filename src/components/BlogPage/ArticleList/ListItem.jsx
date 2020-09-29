import React from 'react'
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
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
    onClick={props.setNavItem()}
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: page => {
        console.log(page);
      },
      pageSize: 3,
    }}
    dataSource={listData}
    footer={
      <div>
        Online <b>Book</b> Store
      </div>
    }
    renderItem={item => (
      <List.Item
        className='list-item'
        key={item.title}
        actions={[
          <IconText icon={StarOutlined} text={item.stars} key="list-vertical-star-o" />,
          <IconText icon={LikeOutlined} text={item.likes} key="list-vertical-like-o" />,
          <IconText icon={MessageOutlined} text={item.comments} key="list-vertical-message" />,
        ]}
        extra={
          <img
            className='book-card-img'
            width={272}
            alt="logo"
            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
          />
        }
      >
        <List.Item.Meta
          avatar={<Avatar src={item.avatar} />}
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