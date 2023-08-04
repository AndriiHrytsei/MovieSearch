import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import Home from './pages/Home';
import Movies from './pages/Movies';
import MovieDetails from './MovieDetails/MovieDetails';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />} />
      </Route>
    </Routes>
  );
}
