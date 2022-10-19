import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Admin from './Admin'
import Books from './Books'
import BooksEdit from './BooksEdit'
import SingleBooks from './SingleBooks'

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Books/>} />
        <Route path="/books/:id"  element={<SingleBooks/>} />
        <Route path="/books/:id/edit" element={<BooksEdit/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </div>
  )
}

export default MainRoutes
