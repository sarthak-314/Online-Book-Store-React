import React, { useState } from 'react'
import './../SignForm/SignForm.scss'
import './UploadBookCSS.css'

import BookImageUpload from './BookImageUpload'
import BookUploadInfoForm from './BookUploadInfoForm'

const UploadABook = props => {
 
 

    const [images, setImages] = useState([])

  
	return (	

<div class="container">
   <section id="formHolder">

      <div class="row">

         <div class="col-sm-6 brand brand-ub">
        <BookImageUpload/>      
         </div>

              <BookUploadInfoForm/>
         </div>

   </section>

</div>

	)
}

export default UploadABook