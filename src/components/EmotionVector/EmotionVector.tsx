import { useState } from 'react';
import { Collapse } from 'react-collapse';
import "./EmotionVector.css";

interface Props{
    emotionVector: number[] | undefined;
}

function EmotionVector({emotionVector}: Props){

    const [isEmotionOpen, setIsEmotionOpen] = useState(false);

    return (
    <li className='movieDetailsEmotionVector'>
        <button className='collapsable' onClick={() => setIsEmotionOpen(!isEmotionOpen)}>Emotion Distribution</button>
        <Collapse isOpened={isEmotionOpen}>
            <div className="emotion-table-wrapper">
                <table className='emotion-table'>
                    <tbody>
                        <tr key={"EmotionName"}>
                            <th>Anger</th>
                            <th>Anticipation</th>
                            <th>Disgust</th>
                            <th>Fear</th>
                            <th>Joy</th>
                            <th>Love</th>
                            <th>Optimism</th>
                            <th>Pessimism</th>
                            <th>Sadness</th>
                            <th>Surprise</th>
                            <th>Trust</th>
                        </tr>
                        <tr>
                            {emotionVector?.map((emotionScore, ind) => (
                                <td key={ind}>{emotionScore}</td>
                            ) )}
                        </tr>
                    </tbody>
                </table>
            </div>
        </Collapse>
    </li>
    );

}

export default EmotionVector;