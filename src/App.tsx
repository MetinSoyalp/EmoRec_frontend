import { useState, useEffect, lazy, Suspense } from 'react'
import { Routes, Route } from "react-router-dom";
import { getUserInfo } from './apis/user';
import { User } from './types/User';
import Navbar from './components/Navbar/Navbar';
const MainPage = lazy(() => import("./pages/MainPage/MainPage"));
const MovieListPage = lazy(() => import("./pages/MovieListPage/MovieListPage"));
const MoviePage = lazy(() => import("./pages/MoviePage/MoviePage"));
const AboutUsPage = lazy(() => import("./pages/AboutUsPage/AboutUsPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage/ProfilePage"));

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

  //TODO: Register sayfası oluştur.
  //TODO: Add a button for adding watched movie.
  //TODO: Add reviews to movie pages.
  //TODO: Add user-user recommendation to profile.

  return (
    <>
      <Navbar userId={userId} setUserId={setUserId} setUser={setUser}/>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/movie_list" element={<MovieListPage />} />
          <Route path="/movie/:id" element={<MoviePage user={user} />} />
          <Route path="/about_us" element={<AboutUsPage />} />
          <Route path="/login" element={<LoginPage onLogin={setUserId} />} />
          {user && <Route path="/profile" element={<ProfilePage user={user} />} />}
        </Routes>
      </Suspense>
    </>
  )
}

export default App
