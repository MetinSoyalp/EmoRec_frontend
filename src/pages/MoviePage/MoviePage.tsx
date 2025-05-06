import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Movie, MovieRecommend } from '../../types/Movie';
import { findMovieById, movieToMovieRecommend } from '../../apis/movie'; 
import Navbar from '../../components/Navbar/Navbar';
import MovieHeader from '../../components/MovieHeader/MovieHeader';
import MovieBody from '../../components/MovieBody/MovieBody';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import MovieRecommendSlider from '../../components/MovieRecommendSlider/MovieRecommendSlider';
import "./MoviePage.css";

function MoviePage() { //For example api call
    const { id } = useParams<{ id: string }>();
    const [movie, setMovie] = useState<Movie | null>(null);
    const [recommendList, setRecommendList] = useState<MovieRecommend[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;
        // Replace "shrek" with the slug you want to load
        findMovieById(id)
            .then((movie) => {
                setMovie(movie);
                document.title = `EmoRec - ${movie.MovieName}`
            })
            .catch((err) => console.error("Failed to fetch movie:", err))
            .finally(() => setLoading(false));

            movieToMovieRecommend(id)
            .then((recList) => {
                setRecommendList(recList);
            })
            .catch((err) => console.error("Failed to fetch movie:", err))
            .finally(() => setLoading(false));
        }, [id]);

    if (loading) return <div>Loading...</div>;
    if (!movie) return <div>Movie not found</div>;

    return (
    <main>
        <Navbar/>
        <div className='movie-info'>
            <MovieHeader movie={movie}/>
            <MovieBody movie={movie}/>
        </div>
        <MovieDetails movie={movie}/>
        <MovieRecommendSlider recommendList={recommendList}/>
    </main>
    )
}

export default MoviePage
