import { useEffect, useState } from 'react';
import fetchUsers from '../../fetchData';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';

export default function Cast() {
  const [actors, setActors] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');
  const { movieId } = useParams();

  const getActors = async id => {
    setStatus('pending');
    try {
      const response = await fetchUsers(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=ee0ed139d0a1d8fcbabd26e40efda78c`
      );
      setError('false');
      setActors(response.cast);
      setStatus('resolved');
    } catch (error) {
      setError(error.message);
      setStatus('rejected');
    }
  };
  useEffect(() => {
    getActors(movieId);
  }, [movieId]);

  if (status === 'pending') {
    return <p>Loading...</p>;
  }
  if (status === 'rejected') {
    return <p>{error}</p>;
  }
  if (status === 'resolved') {
    return (
      <ul className={css.actorsList}>
        {actors.map(actor => (
          <li key={actor.id} className={css.actorInfo}>
            {!actor.profile_path ? (
              <p className={css.noImgAvailable}>No image available</p>
            ) : (
              <img
                className={css.actorImg}
                src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}?api_key=ee0ed139d0a1d8fcbabd26e40efda78c`}
                alt={actor.name}
              />
            )}
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    );
  }
}
