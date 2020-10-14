import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Categories from './Categories'
import BookList from './BookList'
import ChatList from './ChatList'
import { getBookAds } from '../utils/getBooks'
import BookPurchasedList from './BookPurchasedList'
import { BOOK_CATEGORIES, DJANGO_API_URL } from '../../constants'

const Main = props => {
  const [bookCat, setBookCat] = useState(0)

  const [fiction, setFiction] = useState([{title:"Stay And Fight",
  author:"Lucy Parker",
  votes:"1987",
  description:'Readers of all ages and walks of life have drawn inspiration and empowerment from Elizabeth Gilbert’s books for years.',
  image: "https://images-na.ssl-images-amazon.com/images/I/71PL7BiZ5NL.jpg", 
  slug: "/stay-and-fightsarthak"
 }])

  const [science, setScience] = useState([])
  const [ai, setAi] = useState([])
  const [phil, setPhil] = useState([])
  const [bio, setBio] = useState([])


  useEffect(() => {
    axios.get(`${DJANGO_API_URL}/bookad/get-ads-of-cat/fiction`)
    .then(res => setFiction(res.data))
    axios.get(`${DJANGO_API_URL}/bookad/get-ads-of-cat/science`)
    .then(res => setScience(res.data))
    axios.get(`${DJANGO_API_URL}/bookad/get-ads-of-cat/ai`)
    .then(res => setAi(res.data))
    axios.get(`${DJANGO_API_URL}/bookad/get-ads-of-cat/philosophy`)
    .then(res => setPhil(res.data))
    axios.get(`${DJANGO_API_URL}/bookad/get-ads-of-cat/biography`)
    .then(res => setBio(res.data))
  }, [])

  const onCatChange = (cat) => {
    setBookCat(cat)
  }

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
  <Categories 
  bookCat={bookCat}
  onCatChange={onCatChange}/>

   <div class="book-cards">
   <BookList
   fiction={fiction}
   science={science}
   ai={ai}
   phil={phil}
   bio={bio}
   bookCat={bookCat}/>
    </div>

  </div>
 </div>

	)
}

export default Main;









