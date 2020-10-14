import React from 'react'
import { Comment, Avatar, Form, Button, List, Input } from 'antd'
import Editor from './Editor'


const CommentWriteStyle = props => {

    const { comments, submitting, value } = props
    const { handleChange, handleSubmit } = props

    const CommentList = ({ comments }) => (
        <List
          dataSource={comments}
          itemLayout="horizontal"
          renderItem={props => <Comment {...props} />}
        />
      )
      

    return (
        <>
        {comments.length > 0 && <CommentList comments={comments} />}
        <Comment
          avatar={
            <Avatar
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              alt="Han Solo"
            />
          }
          content={
            <Editor
              onChange={handleChange}
              onSubmit={handleSubmit}
              submitting={submitting}
              value={value}
            />
          }
        />
      </>
    )
}

export default CommentWriteStyle