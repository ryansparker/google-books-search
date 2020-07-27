import React, { useState } from 'react'
import './style.css'
import Search from '../Search'
import BookList from '../BookList'




function Books() {

    const [books, setBooks] = useState([]);
 
  


    return(
      <div className="books-wrapper">
        <Search setBooks={ setBooks }/>
        <BookList books={ books }/>
      
      </div>
    )
    
}


export default Books

// API KEY
// AIzaSyAVIIpii234JV1cNjS__FlXtEIS8cavCIM