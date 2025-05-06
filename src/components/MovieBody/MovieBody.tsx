import { useState, useEffect } from 'react';
import "./MovieBody.css"
import { Movie } from "../../types/Movie";

interface Props{
    movie: Movie;
}

function MovieBody({movie}: Props){

    return <div className='div-MovieBody'>
        <img className='movieBodyImage' src={movie.ImageURL}/>
        <p className='movieBodyDescription'>{movie.Description}</p>
    </div>

}

export default MovieBody;