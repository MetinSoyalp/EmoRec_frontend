import { useState } from 'react';
import './AddToWatchedButton.css'; // Add styles here
import { addMovieToWatched } from '../../apis/user'; // adjust path accordingly

type Props = {
  userId: string;
  movieId: string;
};

function AddToWatchedButton({ userId, movieId }: Props) {
  const [added, setAdded] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    if (added || loading) return;

    setLoading(true);
    try {
      await addMovieToWatched(userId, movieId);
      setAdded(true);
    } catch (error) {
      console.error('Failed to add movie to watched list:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      className={`add-to-watched-button ${added ? 'added' : ''}`}
      onClick={handleClick}
      disabled={added || loading}
    >
      {added ? '✓ Added to Watched' : loading ? 'Adding...' : 'Add to Watched'}
    </button>
  );
}

export default AddToWatchedButton;