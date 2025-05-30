import { useState } from 'react';
import { Collapse } from 'react-collapse';
import "./MovieDetails.css";
import { Movie } from "../../types/Movie";
import EmotionVector from '../EmotionVector/EmotionVector';

interface Props {
    movie: Movie;
}

function MovieDetails({ movie }: Props) {
    const [isActorOpen, setIsActorOpen] = useState(false);

    return (
        <div className='div-MovieDetails'>
            <ul className='movieDetails'>
                <li className='movieDetailsGenre'>
                    <b className='listTitle'>Genres: </b>
                    {movie.Genres?.map((genre, i) => (
                        <span key={i} className="list-item">
                            {genre}{i < (movie.Genres?.length ?? 0) - 1 && ", "}
                        </span>
                    ))}
                </li>
                <li className='movieDetailsKeywords'>
                    <b className='listTitle'>Keywords: </b>
                    {movie.Keywords?.map((keyword, i) => (
                        <span key={i} className="list-item">
                            {keyword}{i < (movie.Keywords?.length ?? 0) - 1 && ", "}
                        </span>
                    ))}
                </li>
                <li className='movieDetailsDirector'>
                    <b className='listTitle'>Director:</b> {movie.Director}
                </li>

                <li className='movieDetailsActors'>
                    <div className="collapsable-section">
                        <button className='collapsable' onClick={() => setIsActorOpen(!isActorOpen)}>
                            Actors
                        </button>
                        <Collapse isOpened={isActorOpen}>
                            <div className='actor-table-wrapper'>
                                <table className='actor-table'>
                                    <thead>
                                        <tr>
                                            <th>Actor</th>
                                            <th>Role</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {movie.Crews?.map((actor, i) => (
                                            <tr key={i}>
                                                <td>{actor.Actor}</td>
                                                <td>{actor.Character}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </Collapse>
                    </div>
                </li>

                <EmotionVector emotionVector={movie.M_EmotionVector} />
            </ul>
        </div>
    );
}

export default MovieDetails;
