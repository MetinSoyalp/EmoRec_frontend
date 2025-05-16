import { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom";
import { getUserInfo } from './apis/user';
import { User } from './types/User';
import MoviePage from './pages/MoviePage/MoviePage';
import MainPage from "./pages/MainPage/MainPage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import Navbar from './components/Navbar/Navbar';
import LoginPage from './pages/LoginPage/LoginPage';
import MovieListPage from './pages/MovieListPage/MovieListPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';

function App() { //For example api call
  const [userId, setUserId] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('mockUserId');
    if (stored) {
      setUserId(stored);
      getUserInfo(stored).then( (data) => setUser(data) );
      console.log(user?.Name)
    }
  }, []);

  //TODO: Profile sayfası oluşturup, genre ve emotion vector kısmı, User-Movie recommendation ekle.
  //TODO: Register sayfası oluştur.
  //TODO: Vector kısımlarını görsel grafik ile değiştir (tahminen library ile olacak).

  return (
    <>
      <Navbar userId={userId} setUserId={setUserId} setUser={setUser}/>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/movie_list" element={<MovieListPage/>} />
        <Route path="/movie/:id" element={<MoviePage/>} />
        <Route path="/about_us" element={<AboutUsPage/>} />
        <Route path="/login" element={<LoginPage onLogin={setUserId}/>} />
        {user && <Route path='/profile' element={<ProfilePage user={user} />} />}
      </Routes>
    </>
  )
}

export default App
