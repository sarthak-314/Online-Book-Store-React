import React from 'react'

const BookCard = props => {
  const seeColor = 'book-see-hola-baby book-' + props.color 
	return (
<div class="book-cell">
    <div class="book-img">
     <img src={props.cover} alt="" class="book-photo"/>
    </div>
    <div class="book-content">
     <div class="book-title">{props.title}</div>
     <div class="book-author">by {props.author}</div>
     <div class="rate">
      <fieldset class="rating ">
       <input type="checkbox" id="star5" name="rating" value="5" />
       <label class="full" for="star5"></label>
       <input type="checkbox" id="star4" name="rating" value="4" />
       <label class="full" for="star4"></label>
       <input type="checkbox" id="star3" name="rating" value="3" />
       <label class="full" for="star3"></label>
       <input type="checkbox" id="star2" name="rating" value="2" />
       <label class="full" for="star2"></label>
       <input type="checkbox" id="star1" name="rating" value="1" />
       <label class="full" for="star1"></label>
      </fieldset>
      <span class="book-voters">{props.votes} voters</span>
     </div>
     <div class="book-sum"> {props.summary} </div>
     <div class={seeColor}>See The Book</div>
    </div>
   </div>
  )
}

export default BookCard