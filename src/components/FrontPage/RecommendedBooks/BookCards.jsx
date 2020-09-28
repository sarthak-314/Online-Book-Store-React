import React from 'react'
import { useMediaQuery } from 'react-responsive'

const BookCards = props => {

const showThreeBooks = useMediaQuery({
    query: '(min-device-width: 1120px)'  
})

console.log(showThreeBooks)

	return (
		<div>
		<div className="book-cell">
    <div className="book-img">
     <img src="https://images-na.ssl-images-amazon.com/images/I/81WcnNQ-TBL.jpg" alt="" className="book-photo"/>
    </div>
    <div className="book-content">
     <div className="book-title">BIG MAGIC</div>
     <div className="book-author">by Elizabeth Gilbert</div>
     <div className="rate">
      <fieldset className="rating">
       <input type="checkbox" id="star5" name="rating" value="5" />
       <label className="full" for="star5"></label>
       <input type="checkbox" id="star4" name="rating" value="4" />
       <label className="full" for="star4"></label>
       <input type="checkbox" id="star3" name="rating" value="3" />
       <label className="full" for="star3"></label>
       <input type="checkbox" id="star2" name="rating" value="2" />
       <label className="full" for="star2"></label>
       <input type="checkbox" id="star1" name="rating" value="1" />
       <label className="full" for="star1"></label>
      </fieldset>
      <span className="book-voters">1.987 voters</span>
     </div>
     <div className="book-sum">Readers of all ages and walks of life have drawn inspiration and empowerment from Elizabeth Gilbert’s books for years. </div>
     <div className="book-see">See The Book</div>
    </div>																																																					
   </div>
   <div className="book-cell">
    <div className="book-img">
     <img src="https://i.pinimg.com/originals/a8/b9/ff/a8b9ff74ed0f3efd97e09a7a0447f892.jpg" alt="" className="book-photo"/>
    </div>
    <div className="book-content">
     <div className="book-title">Ten Thousand Skies Above You</div>
     <div className="book-author">by Claudia Gray</div>
     <div className="rate">
      <fieldset className="rating blue">
       <input type="checkbox" id="star6" name="rating" value="5" />
       <label className="full1" for="star6"></label>
       <input type="checkbox" id="star7" name="rating" value="4" />
       <label className="full1" for="star7"></label>
       <input type="checkbox" id="star8" name="rating" value="3" />
       <label className="full1" for="star8"></label>
       <input type="checkbox" id="star9" name="rating" value="2" />
       <label className="full1" for="star9"></label>
       <input type="checkbox" id="star10" name="rating" value="1" />
       <label className="full1" for="star10"></label>
      </fieldset>
      <span className="book-voters">1.987 voters</span>
     </div>
     <div className="book-sum">The hunt for each splinter of Paul's soul sends Marguerite racing through a war-torn San Francisco.</div>
     <div className="book-see book-blue">See The Book</div>
    </div>
   </div>
   {showThreeBooks ? 
    <div className="book-cell-boi">
    <div className="book-img">
     <img src="https://www.abebooks.com/blog/wp-content/uploads/2016/08/10.jpg" alt="" className="book-photo"/>
    </div>
    <div className="book-content">
     <div className="book-title">A Tale For The Time Being</div>
     <div className="book-author">by Ruth Ozeki</div>
     <div className="rate">
      <fieldset className="rating purple">
       <input type="checkbox" id="star11" name="rating" value="5" />
       <label className="full" for="star11"></label>
       <input type="checkbox" id="star12" name="rating" value="4" />
       <label className="full" for="star12"></label>
       <input type="checkbox" id="star13" name="rating" value="3" />
       <label className="full" for="star13"></label>
       <input type="checkbox" id="star14" name="rating" value="2" />
       <label className="full" for="star14"></label>
       <input type="checkbox" id="star15" name="rating" value="1" />
       <label className="full" for="star15"></label>
      </fieldset>
      <span className="book-voters">1.987 voters</span>
     </div>
     <div className="book-sum">In Tokyo, sixteen-year-old Nao has decided there’s only one escape from her aching loneliness and her classNamemates’ bullying.</div>
     <div className="book-see book-pink">See The Book</div>
    </div>
   </div> : null}
   </div>
	)
}

export default BookCards