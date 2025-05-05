import { useState, useEffect } from 'react'
import { Movie } from './types/Movie';
import { findMovieById } from "./apis/movie"

function App() { //For example api call
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace "shrek" with the slug you want to load
    findMovieById("tt0010323")
      .then((data) => setMovie(data))
      .catch((err) => console.error("Failed to fetch movie:", err))
      .finally(() => setLoading(false));
    }, []);

  if (loading) return <div>Loading...</div>;
  if (!movie) return <div>Movie not found</div>;

  return (
    <main>
      <h1>Hello World!</h1>
      <p>Banana, banana, banana...</p>
      <p>{movie.MovieName}</p>
    </main>
  )
}

export default App
