import React from 'react'
import { LikeFilled, StarFilled, MessageFilled } from '@ant-design/icons';
import { List, Avatar, Space } from 'antd';
import './ArticleList.scss'

const ListItem = props => {

const { listData, setNavItem, setBlogArticle } = props


const IconText = ({ icon, text }) => (
    <Space>    
      {React.createElement(icon)}
      {text}
    </Space>
  );
  
    return (
      <List
      onClick={() => setNavItem(1)}
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
          onClick={() => setBlogArticle(item.title)}
          className='list-item'
          key={item.title}
          actions={[
            <IconText icon={StarFilled} text={item.stars} key="list-vertical-star-o" />,
            <IconText icon={LikeFilled} text={item.likes} key="list-vertical-like-o" />,
            <IconText icon={MessageFilled} text={item.comments} key="list-vertical-message" />,
          ]}
          extra={
            <img
              className='book-card-img-small'
              width={272}
              alt="logo"
              src={item.bookImage}
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