import { useParams, Outlet, NavLink, useLocation } from 'react-router-dom';
import fetchData from '../../../fetchData';
import { Suspense, useEffect, useState } from 'react';
import css from './MovieDetails.module.css';
import noPoster from '../../../images/default.jpg'

export default function MovieDetails() {
  const [movie, setMovie] = useState({});
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');
  const { movieId } = useParams();
  const location = useLocation();
  const goBackToMovies = location.state?.from ?? '/movies'

  const getMovies = async id => {
    setStatus('pending');
    try {
      const response = await fetchData(
        `https://api.themoviedb.org/3/movie/${id}?api_key=ee0ed139d0a1d8fcbabd26e40efda78c`
      );
      setError(false);
      setMovie(response);
      setStatus('resolved');
    } catch (error) {
      setError(error.message);
      setStatus('rejected');
    }
  };

  useEffect(() => {
    getMovies(movieId);
  }, [movieId]);

  if (status === 'pending') {
    <p>Loading...</p>;
  }

  if (status === 'rejected') {
    return <p>{error}</p>;
  }

  if (status === 'resolved') {
    return (
      <main className="movieDetailsContainer">
        <NavLink
          className={css.goBackBtn}
          to={goBackToMovies}
        >
          <span className="material-symbols-outlined">arrow_left_alt</span>
          <span>Go back</span>
        </NavLink>
        <div className={css.movieDetails}>
          <div className={css.posterBox}>
            <img
              className={css.poster}
              src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : noPoster}
              alt=""
            />
          </div>
          <div className={css.movieInfo}>
            <h2 className={css.movieTitle}>{movie.title || movie.name}</h2>
            <p className={css.score}>
              User score: {Math.round(movie.vote_average)}/10
            </p>
            <div className={css.overview}>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
            </div>
            <div className={css.genres}>
              <h3>Genres</h3>
              <p>
                {movie.genres.map(genre => (
                  <span key={genre.id}>{genre.name}, </span>
                ))}
              </p>
            </div>
          </div>
        </div>
        <div className={css.additionaInfo}>
          <p className={css.castAndReviewsTitle}>Additional information</p>
          <ul>
            <li>
              <NavLink className={css.navLink} to="cast">
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink className={css.navLink} to="reviews">
                Reviews
              </NavLink>
            </li>
          </ul>
        </div>
        <Suspense fallback={<p>Loading page...</p>}>
          <Outlet />
        </Suspense>
      </main>
    );
  }
}
