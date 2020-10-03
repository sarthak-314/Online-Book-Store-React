import axios from 'axios'
import { DJANGO_API_URL, DJANGO_BASE_URL } from '../../constants'

const GET_BLOGS_URL = DJANGO_API_URL + '/blog/all/'
export const getBlogs = () => {
    return axios.get(GET_BLOGS_URL)
    .then(res => {
        const blogs = res.data
        const blogsSerialized = []
        var i
        for(i in blogs){
            const blog = blogs[i]
            const book = blog.book
            const user_profile = blog.user_profile
            const title = blog.title
            const content = blog.content.substr(0, 200) + '...'
            const username = user_profile.user.username
            const description = `Book Review for ${book.title} by ${username}`
            const avatar = DJANGO_BASE_URL + user_profile.profile_pic
            const bookImage = DJANGO_BASE_URL + book.image
            const likes = 25
            const stars = 10
            const comments = 3
            const blogSerialized = {bookImage, title, avatar, description, likes, stars, comments, content}
            blogsSerialized.push(blogSerialized)
        }
        return blogsSerialized
    })    
}




