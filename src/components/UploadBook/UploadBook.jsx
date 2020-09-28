import React, { useState } from 'react'
import './../SignForm/SignForm.scss'
import './UploadBookCSS.css'

import BookImageUpload from './BookImageUpload'
import BookUploadInfoForm from './BookUploadInfoForm'
import axios from 'axios'
import { DJANGO_API_URL } from '../constants'

const UploadABook = props => {
 
    const [bookImage, setBookImage] = useState(null)
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState(0)
    const [bookCondition, setBookCondition] = useState(-1)
    const [bookCategory, setBookCategory] = useState(-1)

    const uploadBook = event => {
       event.preventDefault()
       const BOOK_CONDITION_CHOICES = {1: 'N', 2: 'G', 3: 'O'}
       const BOOK_CATEGORY_CHOICES = {1: 'F', 2: 'S', 3: 'A', 4: 'P', 5: 'B'}
       const condition = BOOK_CONDITION_CHOICES[bookCondition]
       const category = BOOK_CATEGORY_CHOICES[bookCategory]
       const data = {'title': title, 'condition': condition,
                     'category': category, 'price': price, 'image': bookImage}
      const url = DJANGO_API_URL + '/bookad/create-ad/'
      // Check this shit boi
      const header = {'content-type': 'multipart/form-data'}
       axios.post(url, data, header)
       .then(res => console.log(res))
       .catch(err => console.log(err))
    }
  
	return (	

<div class="container">
   <section id="formHolder">

      <div class="row">

         <div class="col-sm-6 brand brand-ub">
        <BookImageUpload
        setBookImage={setBookImage}
        />      
         </div>
              <BookUploadInfoForm
              setTitle={setTitle}
              setPrice={setPrice}
              setBookCategory={setBookCategory}
              setBookCondition={setBookCondition}
              uploadBook={uploadBook}
              />
         </div>

   </section>

</div>

	)
}

export default UploadABook