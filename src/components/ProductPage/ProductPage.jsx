import React, { useEffect, useState } from 'react'
import './ProductPage.scss'
import BookShow from '../FrontPage/Main/BookShow'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import YouMightLike from './YouMightLike'
import BooksSimilar from './BooksSimilar'
import BookInfo from './BookInfo'
import BookImages from './BookImages'
import { DJANGO_API_URL } from '../constants'

const ProductPage = () => {
    const [image, setImage] = useState('')
    const { slug } = useParams()

    const [title, setTitle] = useState('')
    const [price, setPrice] = useState(0)
    const [amazonPrice, setAmazonPrice] = useState(0)
    const [condition, setCondition] = useState('')
    const [category, setCategory] = useState('')

    console.log(slug)
    useEffect(() => {
        axios.get(`${DJANGO_API_URL}/bookad/get-ad/${slug}/`).then(res => {
          console.log(res.data)
            setTitle(res.data.book_ad.book.title)
            setPrice(res.data.book_ad.price)
            setAmazonPrice(res.data.book_ad.amazon_price) 
            setCondition(res.data.book_ad.condition)
            setCategory(res.data.book_ad.category)       
            console.log('shit')
            const i = 'http://127.0.0.1:8000'+res.data.book_ad.book.image
            setImage(i)
            console.log(i)
        })
        .catch(err => console.log(err))
    }, [])
    

    return (
<main class="mt-5 pt-4">
    <div class="container dark-grey-text mt-5">

      <div class="row wow fadeIn">

          <BookImages
          image={image}
          />
          <BookInfo
          category={category}
          condition={condition}
          popular='Bestseller'
          title={title}
          price={price}
          amazonPrice={amazonPrice}
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