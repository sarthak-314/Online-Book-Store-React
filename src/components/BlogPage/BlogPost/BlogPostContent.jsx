import React, { useState, useEffect } from 'react'
import { Typography } from 'antd';
import { DJANGO_API_URL, DJANGO_BASE_URL } from '../../constants'
import axios from 'axios'
import ListItem from './IntroPiece'
import CommentWrite from './Comments/CommentWrite/CommentWrite'
import CommentView from './Comments/CommentView'

const BLOG_POST_BY_TITLE_URL = DJANGO_API_URL + '/blog/get-blog-by-title/'

const { Title, Paragraph, Text } = Typography;
const BlogPost = props => {
  const { blogArticle } = props
  const [content, setContent] = useState('Book Review Content')
  const [critic, setCritic] = useState('Rick Sanchez')
  const [bookImg, setBookImg] = useState(null)
  const [criticImg, setCriticImg] = useState(null)
  

  const getBlogPostByTitle = () => {
      
  }

  useEffect(() => {
    console.log(props.title)
    axios.post(BLOG_POST_BY_TITLE_URL, {'title': props.title}).then(res => {
      const blog = res.data.blog
      setContent(blog.content)
      setCritic(blog.user_profile.user.username)
      setBookImg(DJANGO_BASE_URL + blog.book.image)
      setCriticImg(DJANGO_BASE_URL + blog.user_profile.profile_pic)
  })
    .catch(err => console.log(err))
  }, [])
  
  const listData = [{
    title: `Book review by ${critic}`,
    avatar: {criticImg},
    likes: 25, 
    stars: 10, 
    comments: 5
  }]

return (<>
<Typography>
    <Title>{props.title}</Title>
    <ListItem listData={listData} bookImg={bookImg} avatar={criticImg} />
    <Paragraph>
      {content}
    </Paragraph>
</Typography>
<CommentWrite
title={props.title}
/>
<CommentView/>
<CommentView/>
</>
)
}

export default BlogPost

