import { useState, useEffect } from 'react';
import "./MovieCard.css";
import { MovieRecommend } from "../../types/Movie";

interface Props{
  recommendedMovie: MovieRecommend;
}

function MovieCard({recommendedMovie}: Props){

    return <div className='div-movie-card'>
        <img className="movie-card-image" src={recommendedMovie.movie.ImageURL} alt="Movie Poster" />
        <div className="movie-card-body">
            <p className="movie-title">{recommendedMovie.movie.MovieName}</p>
            <p className="movie-score">Recommend Score: {recommendedMovie.final_score.toFixed(2)}</p>
        </div>
    </div>

}

export default MovieCard;