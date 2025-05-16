import { useState, useEffect } from 'react'
import { useSearchParams, useNavigate } from "react-router-dom";
import "./MovieListPage.css";
import { Movie } from '../../types/Movie';
import { getMoviePaginated } from '../../apis/movie';
import Pagination from '@mui/material/Pagination';

function MovieListPage() { //For example api call
    const [searchParams] = useSearchParams();
    const pageNo = Number( searchParams.get("page") ) || 1; // for example: ?userId=123
    const [movieList, setMovieList] = useState<Movie[]>([]);
    const [total, setTotal] = useState(0);
    const [pageSize, setPageSize] = useState(10); // default fallback
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    //Put other infos
    useEffect( () => {
        getMoviePaginated(pageNo)
            .then((recList) => {
                setTotal(recList.total)
                setPageSize(recList.page_size)
                setMovieList(recList.results);
                console.log(recList)
            })
            .catch((err) => console.error("Failed to fetch movie:", err))
            .finally(() => setLoading(false));
        document.title = `EmoRec - Movie List`
    }, [pageNo] );

    const goToPage = (newPage: number) => {
        navigate(`/movie_list?page=${newPage}`);
    };

    if (loading) return <div>Loading...</div>;

    return (
    <main>  
        <div className='MovieList'>
            <h1>Movies</h1>
            <ul className='movie-list__container'>
                {movieList?.map((movie) => (
                    <li key={movie.MovieID} className="movie-list__item">
                        <img
                            className="movie-list__image"
                            src={movie.ImageURL}
                            alt={movie.MovieName}
                        />
                        <div className="movie-list__details">
                            <a href={`/movie/${movie.MovieID}`} className="movie-list__name">
                                {movie.MovieName}
                            </a>
                            <span className="movie-list__rating">
                                Average Rating: {movie.RatingValue ?? "N/A"} ⭐
                            </span>
                            <p className="movie-list__description">
                                {movie.Description ?? "No description available."}
                            </p>
                        </div>
                    </li>
                ) )}
            </ul>
            <div className='movie-list__pagination'>
                <Pagination
                    count={Math.ceil(total / pageSize)}
                    page={pageNo}
                    onChange={(_, newPage) => goToPage(newPage)}
                    color="primary"
                    siblingCount={1}
                    boundaryCount={1}
                    sx={{
                        '& .MuiPaginationItem-root': {
                            '&:hover': {
                            backgroundColor: '#a9fdfd',
                            },
                        },
                        '& .MuiPaginationItem-root.Mui-selected': {
                            backgroundColor: '#25ebeb',
                            color: '#000',
                            fontWeight: 'Bold',
                            '&:hover': {
                            backgroundColor: '#79ebeb',
                            },
                        },
                    }}
                />
            </div>
        </div>
    </main>
    )
}

export default MovieListPage
