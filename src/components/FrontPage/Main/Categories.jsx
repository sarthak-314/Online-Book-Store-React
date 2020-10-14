import React from 'react'

const Categories = props => {
    const { onCatChange, bookCat } = props
    return (
    <div class="main-menu">
    <div class="genre">Popular by Genre</div>
    <div class="book-types">
    
     <a href="#" class={ bookCat == 0 ? 'book-type active' : 'book-type' } onClick={()=>onCatChange(0)}>
          All Genres
    </a>
     <a href="#" class={ bookCat == 1 ? 'book-type active' : 'book-type' } onClick={()=>onCatChange(1)}>
          Fiction
     </a>
     <a href="#" class={ bookCat == 2 ? 'book-type active' : 'book-type' } onClick={()=>onCatChange(2)}>
          Science
     </a>
     <a href="#" class={ bookCat == 3 ? 'book-type active' : 'book-type' } onClick={()=>onCatChange(3)}>
          AI & Code
    </a>
     <a href="#" class={ bookCat == 4 ? 'book-type active' : 'book-type' } onClick={()=>onCatChange(4)}>
          Philosophy
    </a>
     <a href="#" class={ bookCat == 5 ? 'book-type active' : 'book-type' } onClick={()=>onCatChange(5)}>
          Biography
    </a>
    </div>
   </div>   
)
}

export default Categories