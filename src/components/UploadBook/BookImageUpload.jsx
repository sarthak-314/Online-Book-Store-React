import React from 'react'
import Dropzone from 'react-dropzone'

const BookImageUpload = (props) => {
    return (
        <div>
        <a href="#" class="logo-ub"> BOOK UPLOAD </a>
        <Dropzone
        >
            {({ getRootProps, getInputProps }) => (
                <div class='upload-book-add-hover-boi'
                    {...getRootProps()}
                > 
                    <div class='plus-upload-book-boi'> + </div>
                    {console.log('getRootProps', { ...getRootProps() })}
                    {console.log('getInputProps', { ...getInputProps() })}
                    <input {...getInputProps()} />
                     
                </div>
            )}
        </Dropzone>
                <div class='upload-book-add-hover-boi float-right-boi'> 
                </div>

        <div class='btn-boi '> AUTO-DETECT (TEXT)</div>
        <div class='btn-boi-2'> AUTO-DETECT (IMAGE)</div>
</div>
    )
}

export default BookImageUpload