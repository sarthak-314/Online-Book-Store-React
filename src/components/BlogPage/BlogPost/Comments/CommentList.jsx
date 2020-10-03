import React, { useState, useEffect } from 'react'
import Comment from './CommentView'
import axios from 'axios'

const CommentList = props => {
    useEffect(() => {
        getCommentList()
    }, [])

    // blogComment - blog, user, 
    const getCommentList= () => {
        const blogTitle = props.title
        axios.get('comments')
        .then(res => {
            const comments = res.data
            const commentsSerialized = []
            var i
            for(i in comments){
                const comment = comments[i]
                const user_profile = comment.user_profile
                
                const content = comment.content
                const avatar = DJANGO_BASE_URL + user_profile.profile_pic
                const username = user_profile.user.username

                const commentSerialized = { content, avatar, username }
                commentsSerialized.push(commentSerialized)
            }
            setComments(commentsSerialized)
        })
        .error(err => console.log(err))
    }

    const [comments, setComments] = useState({})


    return (
        <>
        {comments.map(comment => {
            <Comment
            avatar={comment.avatar}
            content={comment.content}
            username={comment.username}
            />
        })}
        </>
    )
}

export default CommentList