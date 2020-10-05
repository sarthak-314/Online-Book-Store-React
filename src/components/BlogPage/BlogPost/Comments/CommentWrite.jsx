import React, { useState, useEffect } from 'react'
import { Comment, Avatar, Form, Button, List, Input } from 'antd'
import { useSelector } from 'react-redux'
import moment from 'moment'
import { DJANGO_API_URL } from '../../../constants'
import axios from 'axios'


const { TextArea } = Input

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    itemLayout="horizontal"
    renderItem={props => <Comment {...props} />}
  />
)

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
        Add Comment
      </Button>
    </Form.Item>
  </>
)


const CommentWrite = props => {
    const [comments, setComments] = useState([])
    const [submitting, setSubmitting] = useState(false)
    const [value, setValue] = useState('')
    const token = useSelector(state => state.token)
    
    const handleSubmit = () => {
        if(!value) {
            return 
        }
        setSubmitting(true)
        setTimeout(() => {
            setSubmitting(false)
            setValue('')
            const newComments = [...comments, {
            author: 'Han Solo',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: <p>{value}</p>,
            datetime: moment().fromNow()
            }]
            setComments(newComments)
        }, 650)
        const POST_COMMENT_URL = DJANGO_API_URL + '/blog/post-comment/'
        const data = {
        'title': props.title, 
        'comment': value
        } 
        console.log(token)
        const header = {'Authorization' : `Token ${token}`}
        axios.post(POST_COMMENT_URL, data, { 'headers': header })
        .then(res => console.log(res))
        .catch(err => console.log(err))
 
    }
    const handleChange = e => {
        setValue(e.target.value)
      }
    
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

export default CommentWrite