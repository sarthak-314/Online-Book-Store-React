import React, { useState } from 'react'
import Dropdowns from './Dropdowns'

const BookUploadInfoForm = (props) => {
    
    const [titleValue, setTitleValue] = useState('')
    const [descriptionValue, setDescriptionValue] = useState('')
    const [priceValue, setPriceValue] = useState(0)
   
    const onTitleChange = event => {
        setTitleValue(event.currentTarget.value)
      }
      const onDescriptionChange = event => {
        setDescriptionValue(event.currentTarget.value)
      }
      const onPriceChange = (event) => {
          setPriceValue(event.currentTarget.value)
      }
      
    
    return (
        <div class="col-sm-6 form">

            <div class='signup form-peice'>
               <form class="signup-form" action="#" method="post">
               <br/>
               <br/>
                  <div class="form-group">
                     {titleValue === '' ? <label for="name">Title</label> : null}
                     <input type="text"  id="name" class="name" onChange={onTitleChange}/>
                     <span class="error"></span>
                  </div>
            <br/>
            <br/>
            
            <Dropdowns/>
			
              <br/>
              <br/>
              <br/>
                  <div class="form-group">
                     {priceValue === 0 ? <label for="name"> Price (Rs.) </label> : null}
                     <input type="number" class="name"/>
                     <span class="error"></span>
                  </div>
                  <div class="form-group">
                     {descriptionValue === '' ? <label for="phone">Description - <small>Optional</small></label> : null}
                     <textArea type="text" name="phone" id="phone" class='textarea-boi'/>
                  </div>
				<br/>
                  <div class="CTA">
                     <input type="submit" value="Signup Now" id="submit"/>
                  </div>
             <br/>
             <br/>
               </form>
            </div>
         </div>
      
    )
}

export default BookUploadInfoForm