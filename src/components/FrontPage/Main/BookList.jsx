import React, { useState } from 'react'
import BookShow from './BookShow'

const BookList = props => {
    const [bookShowList, setBookShowList] = useState([{title:"Stay And Fight",
                                                     author:"Lucy Parker",
                                                     votes:"1987",
                                                     description:'Readers of all ages and walks of life have drawn inspiration and empowerment from Elizabeth Gilbert’s books for years.',
                                                     image: "https://images-na.ssl-images-amazon.com/images/I/71PL7BiZ5NL.jpg", 
                                                     slug: "/stay-and-fightsarthak"
                                                    }])

    return (
    <div>
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
    )
}

export default BookList