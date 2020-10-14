import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'
import { DJANGO_API_URL } from '../../../../constants'
import axios from 'axios'
import CommentWriteStyle from './CommentWriteStyle'


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
    
    return <CommentWriteStyle
            comments={comments}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            submitting={submitting}
            value={value}
            />

}

export default CommentWrite