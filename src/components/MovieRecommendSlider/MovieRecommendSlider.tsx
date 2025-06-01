import { useEffect, useState } from "react";
import "./MovieRecommendSlider.css";
import { MovieRecommend } from "../../types/Movie";
import MovieCard from '../MovieCard/MovieCard';

interface Props{
    recommendList: MovieRecommend[],
    title: string,
}

function MovieRecommendSlider({recommendList, title}: Props){
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading delay if needed
        if (recommendList.length > 0) {
            setLoading(false);
        }
    }, [recommendList]);

    return <div className='div-movie-recommend-slider'>
            <h3 className='slider-title'>{title}</h3>
            {
                loading ? (
                    <div className="recommend-loading">Loading recommendations...</div>
                ) : (
                    <div className="slider-container">
                        <div className="slider-track">
                            {recommendList.map((item, i) => (
                                <a
                                    href={`/movie/${item.movie.MovieID}`}
                                    key={i}
                                    style={{ textDecoration: 'none', color: 'inherit' }}
                                >
                                    <MovieCard recommendedMovie={item} />
                                </a>
                            ))}
                        </div>
                    </div>
                )
            }
    </div>
}

export default MovieRecommendSlider;