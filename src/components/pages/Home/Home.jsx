import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import fetchData from '../../../fetchData';
import css from './Home.module.css';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

  const getMovies = async () => {
    setStatus('pending');
    try {
      const response = await fetchData(
        ' https://api.themoviedb.org/3/trending/movie/day?api_key=ee0ed139d0a1d8fcbabd26e40efda78c&language=en-US'
      );
      setMovies(response.results);
      setError(false);
      setStatus('resolved');
    } catch (error) {
      setError(error.message);
      setStatus('rejected');
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  if (status === 'pending') {
    return <p>Loading...</p>;
  }

  if (status === 'resolved') {
    return (
      <main>
        <h2 className={css.homeHeading}>Trending today</h2>
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <NavLink className={css.navLink} to={`movies/${movie.id}`}>
                {movie.title || movie.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </main>
    );
  }

  if (status === 'rejected') {
    return <p>{error}</p>;
  }
}
