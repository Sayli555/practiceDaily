import React from 'react'
import { Route,Routes } from 'react-router-dom'

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" />
        <Route path="/books/:id" />
        <Route path="/books/:id/edit" />
        <Route path="/admin" />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </div>
  )
}

export default MainRoutes
