import React, { useState } from 'react'
import Dropdowns from './Dropdowns'
import {textArea} from 'antd'

const BookUploadInfoForm = (props) => {
   
   const { setTitle, setPrice } = props

    const [titleFocus, setTitleFocus] = useState(0) //0 for nothin' 1 for yea -1 for neaaa
    const [priceFocus, setPriceFocus] = useState(0)   
    
    
    return (
        <div class="col-sm-6 form">

            <div class='signup form-peice'>
              
               <form class="signup-form" action="#" method="post">
              
               <br/>
               <br/>
              
               <div class={`${titleFocus === -1 ? 'hasError form-group' : 'form-group'}`}>
               <label for="name" class={`${titleFocus === 1 ? 'active' : ''}`}>Book Title</label>
               <input type="text" name="username" id="name" class="name"
               onChange={e => setTitle(e.target.value)} onFocus={() => setTitleFocus(1)}/>
               <span class="error"> works? </span>
               </div>
            <br/>
            <br/>
            
            <Dropdowns
            setBookCategory={props.setBookCategory}
            setBookCondition={props.setBookCondition}
            />
			
              <br/>

            <div class={`${priceFocus === -1 ? 'hasError form-group' : 'form-group'}`}>
               <label for="name" class={`${priceFocus === 1 ? 'active' : ''}`}>Price (Rs.)</label>
               <input type="number" name="username" id="name" class="name"
               onChange={e => setPrice(e.target.value)} onFocus={() => setPriceFocus(1)}/>
               <span class="error"> works? </span>
            </div>

            <br/>
				<br/>
                  <div class="CTA">
                     <input type="submit" value="Upload Book" id="submit"
                     onClick={e => props.uploadBook(e)}
                     />
                  </div>
             <br/>
             <br/>
               </form>
            </div>
         </div>
      
    )
}

export default BookUploadInfoForm