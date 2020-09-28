import React from 'react'

const BookSide = props => {
	const { bookSideName, bookSideAuthor, bookSideImage } = props
	return (
	
<div class="year-book">
     <img src={bookSideImage} alt="" class="year-book-img"/>
     <div class="year-book-content">
      <div class="year-book-name">{bookSideName}</div>
      <div class="year-book-author">by {bookSideAuthor}</div>
     </div>
</div>    
	)
}

export default BookSide