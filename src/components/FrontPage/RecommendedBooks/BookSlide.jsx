import React from 'react'
import BookCard from './BookCard'
import { Carousel } from 'antd';
import BookCards from './BookCards'

const BOOKS = ['BIG MAGIC', 'Ten Thousand Skies Above You', 'A Tale For The Time Being', 'The Great Gatsby', 'After You']

const COVERS = ["https://images-na.ssl-images-amazon.com/images/I/81WcnNQ-TBL.jpg",
                "https://i.pinimg.com/originals/a8/b9/ff/a8b9ff74ed0f3efd97e09a7a0447f892.jpg",
                "https://www.abebooks.com/blog/wp-content/uploads/2016/08/10.jpg", 
                "https://images-na.ssl-images-amazon.com/images/I/81af+MCATTL.jpg", 
                "https://images-na.ssl-images-amazon.com/images/I/81UWB7oUZ0L.jpg"
                 ]

const AUTHORS = ['Elizabeth Gilbert', 'Claudia Gray', 'Ruth Ozeki', 'F.Scott Fitzgerald', 'Jojo Moyes']

const SUMMERIES = ["Readers of all ages and walks of life have drawn inspiration and empowerment from Elizabeth Gilbert’s books for years.", 
                   "The hunt for each splinter of Paul's soul sends Marguerite racing through a war-torn San Francisco.", 
                   "In Tokyo, sixteen-year-old Nao has decided there’s only one escape from her aching loneliness and her classmates’ bullying.", 
                   "The Great Gatsby, F. Scott Fitzgerald’s third book, stands as the supreme achievement of his career.", 
                   "Louisa Clark is no longer just an ordinary girl living an ordinary life. After the transformative six months spent."]

const VOTES = [3141, 5926, 5358]

const COLORS = ['pink', 'blue', 'purple']

const BookSlide = props => {

	return (
<div class="book-slide">
     <BookCards/>
</div>

	)
}

export default BookSlide