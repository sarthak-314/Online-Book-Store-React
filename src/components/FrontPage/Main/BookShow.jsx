import React from 'react'
import { useHistory } from 'react-router-dom'

const BookShow = props => {

	const { bookName, bookAuthor,  bookVotes, bookDesc, bookLikes, bookImg } = props
  const history = useHistory()
  const routeChange = (slug) => { 
    const path = `/bookad/${slug}` 
    history.push(path)
  }


	return (
		<div class="book-card" onClick={() => routeChange('stay-and-fightsarthak')}>
     <div class="content-wrapper">
     <img src={bookImg} alt="" class="book-card-img" onClick={() => routeChange('stay-and-fightsarthak')}/>
     <div class="card-content">
     <div class="book-name">{bookName}</div>
      <div class="book-by">by {bookAuthor}</div>
      <div class="rate">
<fieldset class="rating book-rate">
<input type="checkbox" id="star-c1" name="rating" value="5"/>
<label class="full" for="star-c1"></label>
<input type="checkbox" id="star-c2" name="rating" value="4"/>
<label class="full" for="star-c2"></label>
<input type="checkbox" id="star-c3" name="rating" value="3"/>
<label class="full" for="star-c3"></label>
<input type="checkbox" id="star-c4" name="rating" value="2"/>
<label class="full" for="star-c4"></label>
<input type="checkbox" id="star-c5" name="rating" value="1"/>
<label class="full" for="star-c5"></label>
</fieldset>
<span class="book-voters card-vote">{bookVotes} voters</span>
</div>
       <div class="book-sum card-sum"> {bookDesc} </div>
      </div>
    </div>
     <div class="likes">
     <div class="like-profile">
    <img src="https://randomuser.me/api/portraits/women/63.jpg" alt="" class="like-img"/>
   </div>
     <div class="like-profile">
    <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80" alt="" class="like-img"/>
   </div>
     <div class="like-name"><span> Your Friend #1 </span> and<span> Your Friend #2 </span> like this</div>
   </div>
    </div>


	)
}

export default BookShow