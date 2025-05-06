import "./MovieRecommendSlider.css";
import { MovieRecommend } from "../../types/Movie";
import MovieCard from '../MovieCard/MovieCard';

interface Props{
    recommendList: MovieRecommend[],
}

function MovieRecommendSlider({recommendList}: Props){

    return <div className='div-movie-recommend-slider'>
            <h3 className='slider-title'>Movies like this one</h3>
            <div className="slider-container">
                <div className="slider-track">
                    {recommendList.map((item, i) => (
                        <a href={`/movie/${item.movie.MovieID}`} key={i} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <MovieCard recommendedMovie={item} />
                        </a>
                    ))}
                </div>
            </div>
    </div>
}

export default MovieRecommendSlider;