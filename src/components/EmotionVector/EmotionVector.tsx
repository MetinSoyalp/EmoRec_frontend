import { useState } from 'react';
import { Collapse } from 'react-collapse';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid
} from 'recharts';
import "./EmotionVector.css";

interface Props {
  emotionVector: number[] | undefined;
}

const emotionNames = [
  "Anger", "Anticipation", "Disgust", "Fear", "Joy", 
  "Love", "Optimism", "Pessimism", "Sadness", "Surprise", "Trust"
];

function EmotionVector({ emotionVector }: Props) {
  const [isEmotionOpen, setIsEmotionOpen] = useState(false);

  const data = emotionNames.map((name, i) => ({
    name,
    value: emotionVector?.[i] ?? 0
  }));

  return (
    <li className='movieDetailsEmotionVector collapsable-section'>
        <div className="emotion-wrapper">
            <button className='collapsable' onClick={() => setIsEmotionOpen(!isEmotionOpen)}>
            Emotion Distribution
            </button>
            <Collapse isOpened={isEmotionOpen}>
            <div className="emotion-chart-wrapper">
                <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis domain={[0, 1]} />
                    <Tooltip />
                    <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
                </ResponsiveContainer>
            </div>
            </Collapse>
        </div>
    </li>
  );
}

export default EmotionVector;
