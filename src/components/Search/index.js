import React, { useState } from 'react'
import './style.css'

//props=setBooks

function Search(props) {

    const [query, setQuery] = useState("");
    const API = "AIzaSyAVIIpii234JV1cNjS__FlXtEIS8cavCIM"

    function handleChange(event) {
        setQuery(event.target.value)

        fetch(`https://www.googleapis.com/books/v1/volumes?q=${event.target.value}&key=${API}`)
            .then(response => response.json())
            .then(data => props.setBooks(data));
    }

    return(
        <div className='search-area'>
            <form action="">
          
          <input type="text" placeholder="Book name" value={query} onChange={handleChange}/>
          <input type="submit" value="Search" />
          </form>
      </div>
    )
    
}


export default Search

