import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import BlogForm from './BlogForm'
import axios from 'axios'
import { Spin, Alert } from 'antd'
import { DJANGO_API_URL, DJANGO_BASE_URL } from '../../constants'

const Demo = () => {

  const [bookTitle, setBookTitle] = useState('')
  const [category, setCategory] = useState(-1)
  const [rating, setRating] = useState(-1)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(false)

  const history = useHistory()
  const token = useSelector(state => state.token)

  const onSubmitHandler = event => {
    const BLOG_WRITE_URL = DJANGO_API_URL + '/blog/create-blog/'
    if(token == null){
      history.push('/signup')
    }
    const data = {
      'title': title, 
      'content': content, 
      'rating': rating,
      'book_title': bookTitle
    }
    setLoading(true)
    axios.post(BLOG_WRITE_URL, data).then(res => {
      alert('Blog Successfully Uploaded!')
      setLoading(false)
      history.push('/')
    })
  }

  return (
  loading ? <Spin tip="Loading...">
  <Alert
    message="Uploading Book Review to Server"
    type="success"
  />
</Spin> : 
  <BlogForm
   setBookTitle={setBookTitle}
   setCategory={setCategory}
   setRating={setRating}
   setTitle={setTitle}
   setContent={setContent}
   onSubmitHandler={onSubmitHandler}
  />
  );
};

export default Demo


