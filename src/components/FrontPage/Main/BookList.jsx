import React, { useState, useEffect } from 'react'
import BookShow from './BookShow'

const BookList = props => {

    const { fiction, science, ai, phil, bio, bookCat } = props
    const [bookShowList, setBookShowList] = useState([{title:"Stay And Fight",
                                                     author:"Lucy Parker",
                                                     votes:"1987",
                                                     description:'Readers of all ages and walks of life have drawn inspiration and empowerment from Elizabeth Gilbert’s books for years.',
                                                     image: "https://images-na.ssl-images-amazon.com/images/I/71PL7BiZ5NL.jpg", 
                                                     slug: "/stay-and-fightsarthak"
                                                    }])

    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }
                                                      

    useEffect(() => {
        switch(bookCat) {
            case 0: 
                let allBooks = []
                allBooks.push(...fiction)
                allBooks.push(...science)
                allBooks.push(...ai)
                allBooks.push(...phil)
                allBooks.push(...bio)
                shuffle(allBooks)
                allBooks = allBooks.slice(0, 10)
                setBookShowList(allBooks)
                break; 
            case 1:
              setBookShowList(fiction)
              break;
            case 2:
              setBookShowList(science)
              break;
            case 3: 
                setBookShowList(ai)
                break; 
            case 4: 
                setBookShowList(phil)
                break
            case 5: 
                setBookShowList(bio)
                break;
             
        }
    }, [bookCat])

    return (
    <div>
        {bookShowList.map(book => 
            <BookShow 
            bookName = {book.title}
            bookAuthor = {book.author}
            bookVotes = {book.votes}
            bookDesc = {book.description}
            bookImg = {book.image}
            onClick={e => console.log('boi that sucks ass')}
            />
          )}
   </div>      
    )
}

export default BookList