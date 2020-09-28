import React, { useState } from 'react'
import BookShow from '../FrontPage/Main/BookShow'

const BooksSimilar = () => {
    const [bookShowList, setBookShowList] = useState([{title:"Stay And Fight",
                                                     author:"Lucy Parker",
                                                     votes:"1987",
                                                     description:'Readers of all ages and walks of life have drawn inspiration and empowerment from Elizabeth Gilbert’s books for years.',
                                                     image: "https://images-na.ssl-images-amazon.com/images/I/71PL7BiZ5NL.jpg"
                                                     }])

    return (
<div>
<div class="row d-flex justify-content-center wow fadeIn">

<div class="col-md-6 text-center">

  <h4 class="my-4 h4">Books Similar to BookName</h4>
</div>

</div>
<br/>
<br/>
<div class="row wow fadeIn">

<div class="col-lg-6 col-md-12 mb-4">

{bookShowList.map(book => 
<BookShow 
bookName = {book.title}
bookAuthor = {book.author}
bookVotes = {book.votes}
bookDesc = {book.description}
bookImg = {book.image}
/>
)}
</div>
<div class="col-lg-6 col-md-12 mb-4">

    {bookShowList.map(book => 
        <BookShow 
        bookName = {book.title}
        bookAuthor = {book.author}
        bookVotes = {book.votes}
        bookDesc = {book.description}
        bookImg = {book.image}
        />
        )}
        </div>

</div>

</div>

    )
}

export default BooksSimilar