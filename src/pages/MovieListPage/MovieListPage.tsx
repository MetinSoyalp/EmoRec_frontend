import { useState, useEffect } from 'react'
import { useSearchParams, useNavigate } from "react-router-dom";
import "./MovieListPage.css";
import { Movie } from '../../types/Movie';
import { getMoviePaginated } from '../../apis/movie';

function MovieListPage() { //For example api call
    const [searchParams] = useSearchParams();
    const pageNo = Number( searchParams.get("page") ) || 1; // for example: ?userId=123
    const [movieList, setMovieList] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    //Put other infos
    useEffect( () => {
        getMoviePaginated(pageNo)
            .then((recList) => {
                setMovieList(recList);
                console.log(recList)
            })
            .catch((err) => console.error("Failed to fetch movie:", err))
            .finally(() => setLoading(false));
        document.title = `EmoRec - Movie List`
    } );

    const goToPage = (newPage: number) => {
        navigate(`/movie_list?page=${newPage}`);
    };

    if (loading) return <div>Loading...</div>;

    return (
    <main>
        <div>
            <h1>Movies</h1>
            <ul>
                {movieList?.map((movie) => (
                    <li> <a href={ "/movie/" + movie.MovieID }> {movie.MovieName} </a> </li>
                ) )}
            </ul>
            <div>
                <button onClick={() => goToPage(pageNo - 1)} disabled={pageNo <= 1}>Previous</button>
                <span> Page {pageNo} </span>
                <button onClick={() => goToPage(pageNo + 1)}>Next</button>
            </div>
        </div>
    </main>
    )
}

export default MovieListPage
