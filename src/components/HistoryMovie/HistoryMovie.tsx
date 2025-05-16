import { useState, useEffect } from 'react';
import { Collapse } from 'react-collapse';
import "./HistoryMovie.css";
import { WatchedMovie } from '../../types/User';
import { getMoviesInBatch } from '../../apis/movie';
import { Movie } from '../../types/Movie';

interface Props{
    historyList: WatchedMovie[] | undefined;
}

function HistoryMovie({historyList}: Props){
    const [isHistoryOpen, setIsHistoryOpen] = useState(false);
    const [movieList, setMovieList] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        if (historyList){
            getMoviesInBatch( historyList.map(w => w.movieID) )
            .then( (result) => {
                setMovieList(result);
                setLoading(false);
            } );
        }
    }, [historyList])

    if (loading) return <div>Loading...</div>;

    return (
    <li className='movieDetailsHistory'>
        <button className='collapsable' onClick={() => setIsHistoryOpen(!isHistoryOpen)}>History</button>
        <Collapse isOpened={isHistoryOpen}>
            <div className='history-table-wrapper'>
                <table className='history-table'>
                    <thead>
                        <tr>
                            <td>Movie</td>
                            <td>Date</td>
                        </tr>
                    </thead>
                    <tbody>
                        {historyList?.map((history, ind) => (
                        <tr key={ind}>
                            <td> <a href={`/movie/${movieList[ind].MovieID}`}> {movieList[ind].MovieName} </a> </td> 
                            <td>{history.date}</td>
                        </tr>
                    ) )}
                    </tbody>
                </table>
            </div>
        </Collapse>
    </li>
    );

}

export default HistoryMovie;