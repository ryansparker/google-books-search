import React from 'react'
import './style.css'

const url = 'http://localhost:3000'

function ABook(props) {

    function handleClick() {
        fetch(`${url}/saved`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({id: props.id}) // body data type must match "Content-Type" header
        
          });
    }

console.log(props)
    return(
        <div className="wrapper">
        <div className="thumbnail"><img src= {props.volumeInfo.imageLinks ? props.volumeInfo.imageLinks.thumbnail : ""} /></div>
        <div className="book-info">
        <h2>Book Title: {props.volumeInfo.title} </h2>
        <h3>Book Author: {props.volumeInfo.authors ? props.volumeInfo.authors[0] : ""}</h3>
        <p>description: {props.volumeInfo.description}</p>
        <button type="button" onClick={handleClick}>SAVE</button>
        </div>
        </div>
    )
    
}


export default ABook

