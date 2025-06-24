import { useState, useEffect, ChangeEvent } from 'react'
import { useNavigate, Link } from "react-router-dom";
import "./MovieListPage.css";
import { Movie } from '../../types/Movie';
import { getAllMovies } from '../../apis/movie';
import Pagination from '@mui/material/Pagination';

function MovieListPage() {
    const [fullMovieList, setFullMovieList] = useState<Movie[]>([]);
    const [filteredMovieList, setFilteredMovieList] = useState<Movie[]>([]);
    const [displayedMovies, setDisplayedMovies] = useState<Movie[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [pageNo, setPageNo] = useState(1);
    const [pageSize] = useState(10);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    // Fetch all movies once
    useEffect(() => {
        setLoading(true);
        getAllMovies()
            .then((movies) => {
                setFullMovieList(movies);
                setFilteredMovieList(movies);
            })
            .catch((err) => console.error("Failed to fetch movies:", err))
            .finally(() => setLoading(false));
        document.title = `EmoRec - Movie List`;
    }, []);

    // Filter when search changes
    useEffect(() => {
        const filtered = fullMovieList.filter(movie =>
            movie.MovieName.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredMovieList(filtered);
        setPageNo(1); // reset page on search
    }, [searchTerm, fullMovieList]);

    // Paginate when filtered list or page changes
    useEffect(() => {
        const start = (pageNo - 1) * pageSize;
        const end = start + pageSize;
        setDisplayedMovies(filteredMovieList.slice(start, end));
    }, [filteredMovieList, pageNo, pageSize]);

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const goToPage = (newPage: number) => {
        setPageNo(newPage);
        navigate(`/movie_list?page=${newPage}`);
    };

    if (loading) return <div>Loading...</div>;

    return (
        <main>
            <div className='MovieList'>
                <h1>Movies</h1>

                <div className="movie-list__search">
                    <input
                        type="text"
                        placeholder="🔍 Search movies..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="movie-list__search-input"
                    />
                </div>

                <ul className='movie-list__container'>
                    {displayedMovies.map((movie) => (
                        <li key={movie.MovieID} className="movie-list__item">
                            <img
                                className="movie-list__image"
                                src={movie.ImageURL}
                                alt={movie.MovieName}
                            />
                            <div className="movie-list__details">
                                <Link to={`/movie/${movie.MovieID}`} className="movie-list__name">
                                    {movie.MovieName}
                                </Link>
                                <span className="movie-list__rating">
                                    Average Rating: {movie.RatingValue ?? "N/A"} ⭐
                                </span>
                                <p className="movie-list__description">
                                    {movie.Description ?? "No description available."}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>

                <div className='movie-list__pagination'>
                    <Pagination
                        count={Math.ceil(filteredMovieList.length / pageSize)}
                        page={pageNo}
                        onChange={(_, newPage) => goToPage(newPage)}
                        color="primary"
                        siblingCount={1}
                        boundaryCount={1}
                        sx={{
                            '& .MuiPaginationItem-root': {
                                '&:hover': { backgroundColor: '#a9fdfd' },
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
    );
}

export default MovieListPage;
