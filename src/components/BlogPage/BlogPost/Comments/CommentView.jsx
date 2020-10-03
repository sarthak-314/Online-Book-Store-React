import React from 'react'
import { Comment, Avatar } from 'antd';


const ExampleComment = props => {
    
    const { content, avatar, username } = props

    return (
  <Comment
    author={<a>{username}</a>}
    avatar={
      <Avatar
        src={avatar}
        alt={username}
      />
    }
    content={
      <p>
          {content}
      </p>
    }
  >
  </Comment>
)
}

export default ExampleComment