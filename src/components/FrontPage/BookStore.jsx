import React from 'react'
import BookSlide from './RecommendedBooks/BookSlide'
import Main from './Main/Main'
import AddBook from './Main/AddBook'
import ChatBox from './ChatBox/ChatBox'

import '../BookStore.scss'


const SERVER = 'http://127.0.0.1:8000/'

const BookStore = props => {


		return (
			<div class='book-store'>
				<BookSlide/>
				<AddBook/>
				<Main/>
				<ChatBox/>
			</div>
		)
}

export default BookStore