//import { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom";
import MoviePage from './pages/MoviePage/MoviePage';

function App() { //For example api call

  //Add user login related code later on

  return (
    <Routes>
      <Route path="/movie/:id" element={<MoviePage/>} />
    </Routes>
  )
}

export default App
