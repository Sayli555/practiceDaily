import React from 'react'

const BookCard = ({singlebook}) => {
  return (
    <div>
        <div>
            <div>{singlebook.book_name}</div>
            <div>{singlebook.release_year}</div>
            <div>{singlebook.category}</div>
        </div>
    </div>
  )
}

export default BookCard

