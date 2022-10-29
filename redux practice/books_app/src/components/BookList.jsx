import React from 'react'
import styled from 'styled-components';
import BookCard from './BookCard'

const BookList = ({books}) => {
  return (
    <div>
     {books.length!==0 && books.map((e)=>(
        <BooklistWrapper>
        <BookCard  singlebook={e} />
        </BooklistWrapper>   
     ))}
    </div>
  )
}

export default BookList;

const BooklistWrapper=styled.div`
border: 1px solid blue;
padding:5px;
width:300px

`
