import { Movie } from "../../types/Movie";
import "./MovieBody.css"

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