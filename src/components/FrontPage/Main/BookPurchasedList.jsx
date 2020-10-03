import React, { useState } from 'react'
import BookPurchased from './BooksPurchased'

const BookPurchasedList = props => {
    const [sideBarBooks, setSideBarBooks] = useState([{ 'bookSideImage':"https://images-na.ssl-images-amazon.com/images/I/91dBtgERNUL.jpg",
    'bookSideName':'Dummy Book',
    'bookSideAuthor':'Dummy Dude'
  }])


    return (
<div>
    {sideBarBooks.map((sideBarBook, i) => 
      <BookPurchased
        bookSideName = {sideBarBook['bookSideName']}
        bookSideAuthor = {sideBarBook['bookSideAuthor']}
        bookSideImage= {sideBarBook['bookSideImage']}
      />
    )}
</div>
    )
}

export default BookPurchasedList