import React, { useState } from 'react'
import { List, Avatar, Space } from 'antd';
import { LikeOutlined, LikeFilled, StarFilled, StarOutlined, MessageOutlined } from '@ant-design/icons';

const ListItem = props => {

const { listData } = props


const IconText = ({ icon, text, onClick }) => (
    <Space onClick={() => onClick()} className='add-hover' style={{fontSize: '20px'}}>    
      {React.createElement(icon)}
      {text}
    </Space>
  );

  const [star, setStar] = useState(false)
  const [like, setLike] = useState(false)

    return (
      <List
      itemLayout="vertical"
      size="large"
      dataSource={listData}
      renderItem={item => (
        <List.Item
          key={item.title}
          actions={[
            !star ? 
            <IconText icon={StarOutlined} text={item.stars} key="list-vertical-star-o" onClick={() => setStar(true)}/>
            : <IconText icon={StarFilled} text={item.stars + 1} key="list-vertical-star-o" onClick={() => setStar(false)}/>,
            !like ? <IconText icon={LikeOutlined} text={item.likes} key="list-vertical-like-o" onClick={() => setLike(true)}/>
            : <IconText icon={LikeFilled} text={item.likes + 1} key="list-vertical-like-o" onClick={() => setLike(false)}/>,
            <IconText icon={MessageOutlined} text={item.comments} key="list-vertical-message" onClick={() => console.log('pas')}/>,
          ]}
          extra={
            <img
              className='book-card-img-very-small add-hover'
              width={272}
              alt="logo"
              src={props.bookImg}
            />
          }
        >
          <List.Item.Meta
            avatar={<Avatar src={props.avatar} style={{size : 'large'}}/>}
            title={<h3 href={item.href}>{item.title}</h3>}
            description={item.description}
          />
          {item.content}
        </List.Item>
      )}
    />
      )
}

export default ListItem