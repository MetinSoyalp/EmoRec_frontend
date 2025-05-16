import { useState } from 'react';
import { Collapse } from 'react-collapse';
import "./GenresVector.css";

interface Props{
    genresNames: string[]
    genresVector: number[] | undefined;
}

function GenresVector({genresNames, genresVector}: Props){

    const [isGenresOpen, setIsGenresOpen] = useState(false);

    return (
    <li className='movieDetailsEmotionVector'>
        <button className='collapsable' onClick={() => setIsGenresOpen(!isGenresOpen)}>Genres Distribution</button>
        <Collapse isOpened={isGenresOpen}>
            <div className="genres-table-wrapper">
                <table className='genres-table'>
                    <tbody>
                        <tr key={"EmotionName"}>
                            {genresNames?.map((genreName, ind) => (
                                <th key={ind}>{genreName}</th>
                            ) )}
                        </tr>
                        <tr>
                            {genresVector?.map((genreScore, ind) => (
                                <td key={ind}>{genreScore}</td>
                            ) )}
                        </tr>
                    </tbody>
                </table>
            </div>
        </Collapse>
    </li>
    );

}

export default GenresVector;