import axios from 'axios'
import { DJANGO_API_URL, DJANGO_BASE_URL } from '../../constants'

const GET_BOOK_ADS_URL = DJANGO_API_URL + '/get-ads/'
export const getBookAds = () => {
    return axios.get(GET_BOOK_ADS_URL)
    .then(res => {
        const bookAds = res.data
        const bookAdsNice = []
        var i
        for(i in bookAds){
            const bookad = bookAds[i]
            const book = bookad.book
            const title = book.title
            const author = book.author
            const category = book.category
            const image = DJANGO_BASE_URL + book.image
            var description = ''
            if('description' in book){
                description = book.description
            }
            const votes = 3
            const bookadNice = {title, author, category, image, description, votes}
            bookAdsNice.push(bookadNice)
        }
        return bookAdsNice
    })    
}

