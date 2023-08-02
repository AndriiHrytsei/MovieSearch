import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const fetchMovies = () => {
    fetch(
      'https://api.themoviedb.org/3/trending/all/day?api_key=ee0ed139d0a1d8fcbabd26e40efda78c&language=en-US'
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(new Error('404 not found'));
      })
      .then(data => {
        setMovies(data.results);
        setError(false);
      })
      .catch(error => setError(error.message));
  };
  useEffect(() => {
    fetchMovies();
  }, []);

  if (movies.length > 0) {
    return (
      <ul>
        {movies.map(movie => (
          <li>
            <NavLink to="#">{movie.title || movie.name}</NavLink>
          </li>
        ))}
      </ul>
    );
  } else {
    return <p>{error}</p>;
  }
}
