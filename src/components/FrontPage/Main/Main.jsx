import React, { useState, useEffect } from 'react'
import axios from 'axios'

import BookSide from './BooksPurchased'
import ChatMain from './ChatMain'
import BookShow from './BookShow'
import ProductPage from '../../ProductPage/ProductPage'

import { getBookAds } from '../utils/getBooks'


const Main = props => {

  useEffect(() => {
    // get the book ads
    getBookAds().then(bookAds => {
      setBookShowList(bookAds)
      console.log(bookAds)
    })
   
  }, []);
  
  
  var allBooksList = []

  const [skip, setSkip] = useState(0)
  const [limit, setLimit] = useState(8)

  const [bookShowList, setBookShowList] = useState([{title:"Stay And Fight",
                                                     author:"Lucy Parker",
                                                     votes:"1987",
                                                     description:'Readers of all ages and walks of life have drawn inspiration and empowerment from Elizabeth Gilbert’s books for years.',
                                                     image: "https://images-na.ssl-images-amazon.com/images/I/71PL7BiZ5NL.jpg", 
                                                     slug: "/stay-and-fightsarthak"
                                                    }])

  const [chatSellerList, setChatSellerList] = useState([{sellerName:"Felix Kjellburg",
                                                         sellerImg:"https://www.businessinsider.in/thumb/msid-70659350,width-680,resizemode-4,imgsize-59336/PewDiePie-and-T-Series-quietly-settled-a-court-battle-over-his-racist-diss-tracks-following-their-epic-YouTube-battle.jpg"
                                                          }])

  const [sideBarBooks, setSideBarBooks] = useState([{ 'bookSideImage':"https://images-na.ssl-images-amazon.com/images/I/91dBtgERNUL.jpg",
                                                      'bookSideName':'Dummy Book',
                                                      'bookSideAuthor':'Dummy Dude'
                                                    }])
  
  const [bookCat, setBookCat] = useState(0)

  const onCatChange = newCat => {
    setBookCat(newCat)
    console.log(newCat)
  }

  
  return (
	<div class="main-wrapper">
  <div class="books-of">
   <div class="week">
    <div class="author-title">Chat with Friends</div>
   
    {chatSellerList.map(seller => 
      <ChatMain
      sellerName = {seller.sellerName}
      sellerImg = {seller.sellerImg}
      />
    )}
   
    </div>
   <div class="week year">
    <div class="author-title">Books Purchased</div>
    {sideBarBooks.map((sideBarBook, i) => 
      <BookSide
        bookSideName = {sideBarBook['bookSideName']}
        bookSideAuthor = {sideBarBook['bookSideAuthor']}
        bookSideImage= {sideBarBook['bookSideImage']}
      />
    )}


   </div>
   <div class="overlay"></div>
   </div>
  <div class="popular-books">
   <div class="main-menu">
    <div class="genre">Popular by Genre</div>
    <div class="book-types">
     <a href="#" class="book-type active" onClick={()=>onCatChange(0)}> All Genres</a>
     <a href="#" class="book-type" onClick={()=>onCatChange(1)}> Fiction </a>
     <a href="#" class="book-type" onClick={()=>onCatChange(2)}> Science </a>
     <a href="#" class="book-type" onClick={()=>onCatChange(3)}> AI & Code</a>
     <a href="#" class="book-type" onClick={()=>onCatChange(4)}> Philosophy</a>
     <a href="#" class="book-type" onClick={()=>onCatChange(5)}> Biography</a>
    </div>
   </div>
   <div class="book-cards">
   
    {bookShowList.map(book => 
      <BookShow 
      bookName = {book.title}
      bookAuthor = {book.author}
      bookVotes = {book.votes}
      bookDesc = {book.description}
      bookImg = {book.image}
      onClick={e => console.log('boi that sucks ass')}
      />
    )}
   
   </div>
  </div>
 </div>

	)
}

export default Main;









