import React, { useState, useCallback } from 'react'
import Dropzone from 'react-dropzone'
import { useDropzone } from 'react-dropzone'

const BookImageUpload = (props) => {

    const [bookImage, setBookImage] = useState(null)

    const onDrop = useCallback(acceptedFiles => {
        const bookPic = new FormData()
        bookPic.append('file', acceptedFiles[0])
        props.setBookImage(bookPic)
        setBookImage(bookPic)
    }, [])

     const {getRootProps, getInputProps} = useDropzone({onDrop})

    return (
        <div>
        <a href="#" class="logo-ub"> BOOK UPLOAD </a>

        <div {...getRootProps()}>
          <input {...getInputProps()} />
          {
         <div class="CTA">
            <div class='upload-book-add-hover-boi'                > 
            <div class='plus-upload-book-boi'> + </div>
            </div>
         </div>
          }
        </div>
        
        {bookImage === null ?
        <div class='upload-book-add-hover-boi float-right-boi'> 
        </div>
        :
        null
        // <img src={how_to_see_image_uploaded_wth_dropzone}/>
        } 
        
        <div class='btn-boi '> AUTO-DETECT (TEXT)</div>
        <div class='btn-boi-2'> AUTO-DETECT (IMAGE)</div>
</div>
    )
}

export default BookImageUpload

