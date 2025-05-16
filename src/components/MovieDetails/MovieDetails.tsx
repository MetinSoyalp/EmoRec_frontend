import { useState } from 'react';
import { Collapse } from 'react-collapse';
import "./MovieDetails.css";
import { Movie } from "../../types/Movie";
import EmotionVector from '../EmotionVector/EmotionVector';

interface Props{
    movie: Movie;
}

function MovieDetails({movie}: Props){

    const [isActorOpen, setIsActorOpen] = useState(false);
    const [isEmotionOpen, setIsEmotionOpen] = useState(false);

    return <div className='div-MovieDetails'>
        <ul className='movieDetails'>
            <li className='movieDetailsGenre'>
                <b className='listTitle'>Genres:</b>
                {movie.Genres?.map((genre, i) => (
                    <span key={i} className="list-item"> {genre}{i < (movie.Genres ? movie.Genres?.length : 0) - 1 && ", "} </span>
                ) )}
            </li>
            <li className='movieDetailsKeywords'>
                <b className='listTitle'>Keywords:</b>
                {movie.Keywords?.map((keyword, i) => (
                    <span key={i} className="list-item"> {keyword}{i < (movie.Keywords ? movie.Keywords?.length : 0) - 1 && ", "} </span>
                ) )}
            </li>
            <li className='movieDetailsDirector'><b className='listTitle'>Director:</b> {movie.Director}</li>
            <li className='movieDetailsActors'>
                <button className='collapsable' onClick={() => setIsActorOpen(!isActorOpen)}>Actors</button>
                <Collapse isOpened={isActorOpen}>
                    <div className='actor-table-wrapper'>
                        <table className='actor-table'>
                            <tr>
                                <td>Actor</td>
                                <td>Role</td>
                            </tr>
                            {movie.Crews?.map((actor) => (
                                <tr>
                                    <td>{actor.Actor}</td>
                                    <td>{actor.Character}</td>
                                </tr>
                            ) )}
                        </table>
                    </div>
                </Collapse>
            </li>
            <EmotionVector emotionVector={movie.M_EmotionVector} />
        </ul>
    </div>
}

export default MovieDetails;

            // <li className='movieDetailsEmotionVector'>
            //     <button className='collapsable' onClick={() => setIsEmotionOpen(!isEmotionOpen)}>Emotion Distribution</button>
            //     <Collapse isOpened={isEmotionOpen}>
            //         <div className="emotion-table-wrapper">
            //             <table className='emotion-table'>
            //                 <tr>
            //                     <th>Anger</th>
            //                     <th>Anticipation</th>
            //                     <th>Disgust</th>
            //                     <th>Fear</th>
            //                     <th>Joy</th>
            //                     <th>Love</th>
            //                     <th>Optimism</th>
            //                     <th>Pessimism</th>
            //                     <th>Sadness</th>
            //                     <th>Surprise</th>
            //                     <th>Trust</th>
            //                 </tr>
            //                 <tr>
            //                 {movie.M_EmotionVector?.map((emotionScore) => (
            //                     <td>{emotionScore}</td>
            //                 ) )}
            //                 </tr>
            //             </table>
            //         </div>
            //     </Collapse>
            // </li>