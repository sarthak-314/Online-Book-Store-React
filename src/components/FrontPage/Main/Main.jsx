import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Categories from './Categories'
import BookList from './BookList'
import ChatList from './ChatList'
import { getBookAds } from '../utils/getBooks'
import BookPurchasedList from './BookPurchasedList'


const Main = props => {

  const [skip, setSkip] = useState(0)
  const [limit, setLimit] = useState(8)
  const [bookCat, setBookCat] = useState(0)
  
  return (
	<div class="main-wrapper">
  <div class="books-of">
   <div class="week">
    <div class="author-title">Chat with Friends</div>
      <ChatList/>
    </div>
   <div class="week year">
    <div class="author-title">Books Purchased</div>
    <BookPurchasedList/>
   </div>
   <div class="overlay"></div>
   </div>
  <div class="popular-books">
  <Categories onCatChange={setBookCat}/>

   <div class="book-cards">
   <BookList/>
    </div>

  </div>
 </div>

	)
}

export default Main;









