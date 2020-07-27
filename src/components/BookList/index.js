import React from 'react'
import './style.css'
import ABook from '../ABook'

function BookList(props) {
console.log(props)

if (props.books.items===undefined){
    return null
}

    return(
     <div className='booklist-wrapper'>
        {props.books.items.map(book => {return <ABook {...book} key = {book.id} />})}
     </div>
    )
    
}


export default BookList

