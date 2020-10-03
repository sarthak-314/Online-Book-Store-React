import React from 'react'

const Categories = props => {
    const { onCatChange } = props
    return (
    <div class="main-menu">
    <div class="genre">Popular by Genre</div>
    <div class="book-types">
     <a href="#" class="book-type active" onClick={()=>onCatChange(0)}> All Genres</a>
     <a href="#" class="book-type" onClick={()=>onCatChange(1)}> Fiction </a>
     <a href="#" class="book-type" onClick={()=>onCatChange(2)}> Science </a>
     <a href="#" class="book-type" onClick={()=>onCatChange(3)}> AI & Code</a>
     <a href="#" class="book-type" onClick={()=>onCatChange(4)}> Philosophy</a>
     <a href="#" class="book-type" onClick={()=>onCatChange(5)}> Biography</a>
    </div>
   </div>   
)
}

export default Categories