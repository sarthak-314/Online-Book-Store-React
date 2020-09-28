import React, { useEffect, useState } from 'react'
import './ProductPage.scss'
import BookShow from '../FrontPage/Main/BookShow'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import YouMightLike from './YouMightLike'
import BooksSimilar from './BooksSimilar'
import BookInfo from './BookInfo'
import BookImages from './BookImages'

const ProductPage = () => {
    const [image, setImage] = useState('')
    const { slug } = useParams()
    console.log(slug)
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/get-ad/${slug}/`).then(res => {
            console.log(res.data)
            console.log('shit')
            const i = 'http://127.0.0.1:8000'+res.data.book_ad.book.image
            setImage(i)
            console.log(i)
        })
    }, [])
    
    const [bookShowList, setBookShowList] = useState([{title:"Stay And Fight",
                                                     author:"Lucy Parker",
                                                     votes:"1987",
                                                     description:'Readers of all ages and walks of life have drawn inspiration and empowerment from Elizabeth Gilbert’s books for years.',
                                                     image: "https://images-na.ssl-images-amazon.com/images/I/71PL7BiZ5NL.jpg"
                                                     }])

    return (
<main class="mt-5 pt-4">
    <div class="container dark-grey-text mt-5">

      <div class="row wow fadeIn">

          <BookImages
          image={image}
          />
          <BookInfo
          category='Fiction'
          condition='New'
          popular='Bestseller'
          />

      </div>
    
    <hr/>
    
      <YouMightLike/>
    
    <hr/>

      <BooksSimilar/>      
  </div>
</main>

    )
}

export default ProductPage