import { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom";
import MoviePage from './pages/MoviePage/MoviePage';
import MainPage from "./pages/MainPage/MainPage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import Navbar from './components/Navbar/Navbar';
import LoginPage from './pages/LoginPage/LoginPage';
import MovieListPage from './pages/MovieListPage/MovieListPage';

function App() { //For example api call
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('mockUserId');
    if (stored) {
      setUserId(stored);
    }
  }, []);

  //User ID'ye göre farklı render yapacak, ona göre componentları besle

  //TODO: Login page ekle

  return (
    <>
      <Navbar userId={userId} setUserId={setUserId}/>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/movie_list" element={<MovieListPage/>} />
        <Route path="/movie/:id" element={<MoviePage/>} />
        <Route path="/about_us" element={<AboutUsPage/>} />
        <Route path="/login" element={<LoginPage onLogin={setUserId}/>} />
      </Routes>
    </>
  )
}

export default App
