import { useState, useEffect } from 'react';
import "./MovieHeader.css";
import { Movie } from "../../types/Movie";
import { User } from '../../types/User';
import AddToWatchedButton from '../AddToWatchedButton/AddToWatchedButton';

interface Props{
  movie: Movie;
  user: User | null;
}

function MovieHeader({movie, user}: Props){
    const [duration, setDuration] = useState<String>("");

    useEffect(() => {
        if (!movie.Duration) {
            setDuration("Unknown duration");
          } else {
            const match = movie.Duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?/);
            if (!match) {
              setDuration("Unknown duration");
            } else {
              const [, hours, minutes] = match;
              const formatted = `${hours ? `${hours}h ` : ""}${minutes ? `${minutes}m` : ""}`.trim();
              setDuration(formatted || "Unknown duration");
            }
          }

    }, [movie]);

    return <div className="div-MovieHeader">
        <ul className="movieHeader">
            <li className="movieHeaderItem"> <b className='movieTitle'>{movie.MovieName}</b> <br/> {movie.Year}, {duration} </li>
            <li className="movieHeaderItem"><b>Rating Score</b><br/> ⭐ {movie.RatingValue}</li>
            <li className="movieHeaderItem"><b>Number of Rating</b><br/> {movie.RatingCount}</li>
            {user && <li className='movieHeaderItem'><AddToWatchedButton userId={user.UserID} movieId={movie.MovieID} /></li>}
        </ul>
    </div>
}

export default MovieHeader