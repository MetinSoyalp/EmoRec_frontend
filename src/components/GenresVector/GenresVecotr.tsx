import { useState } from 'react';
import { Collapse } from 'react-collapse';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid
} from 'recharts';
import "./GenresVector.css";

interface Props {
  genresNames: string[];
  genresVector: number[] | undefined;
}

function GenresVector({ genresNames, genresVector }: Props) {
  const [isGenresOpen, setIsGenresOpen] = useState(false);

  const data = genresNames.map((name, i) => ({
    name,
    value: genresVector?.[i] ?? 0
  }));

  const barHeight = 30; // px per bar
  const totalHeight = barHeight * data.length + 50; // extra padding for axis

  return (
    <li className='movieDetailsEmotionVector'>
      <button className='collapsable' onClick={() => setIsGenresOpen(!isGenresOpen)}>
        Genres Distribution
      </button>
      <Collapse isOpened={isGenresOpen}>
        <div className="genres-chart-wrapper" style={{ height: `${totalHeight}px` }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              layout="vertical"
              margin={{ top: 5, right: 20, left: 40, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" domain={[0, 1]} />
              <YAxis dataKey="name" type="category" width={120} />
              <Tooltip />
              <Bar dataKey="value" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Collapse>
    </li>
  );
}

export default GenresVector;
