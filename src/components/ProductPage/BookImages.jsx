import React from 'react'

const BookImages = (props) => {
    const { image } = props
    return (
        <div class="col-md-6 mb-4">
        
        <img src={image} class="img-fluid" alt="" style={{width: '200px', margin: '20px', float:'left'}}/>
        <div class='book-ad-image'>
        <img src={image} class="img-fluid" alt="" style={{width: '200px', margin: '20px', float: 'right'}}/>
        </div>
        </div>

    )
}

export default BookImages