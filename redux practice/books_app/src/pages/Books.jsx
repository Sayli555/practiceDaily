import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BookList from '../components/BookList';
import FilterSort from '../components/FilterSort';
import { getBookData } from '../redux/action';
import styled from "styled-components"
import { useSearchParams } from 'react-router-dom';

const Books = () => {

  const [searchParams]=useSearchParams()
  const dispatch=useDispatch();
  const books=useSelector((state)=>state.books)

  useEffect(()=>{
    const categoryUrl=searchParams.getAll("category");
    const sortUrl=searchParams.get("sort")
    if(books.length==0 && (!categoryUrl || !sortUrl)){

      dispatch(getBookData())
    }
    
  },[])

console.log("books",books)
  return (
    <div>
      <h1>Books</h1>
      <BooksWrapper>

     
      <FilterWrapper>
      <FilterSort/>
      </FilterWrapper>
     <BooklistWrapper>
     <BookList books={books} />
     </BooklistWrapper>
      

      </BooksWrapper>
    </div>
  )
}

export default Books;


const BooksWrapper=styled.div`
display:flex;


`

const FilterWrapper=styled.div`
width:300px;
border:1px solid red;
`

const BooklistWrapper=styled.div`
width:100%;
border:1px solid red;
display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat( auto-fit, minmax(250px,) );

padding:initial
`




