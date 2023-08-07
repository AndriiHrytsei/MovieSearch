import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

const Navigation = lazy(() => import('./Navigation/Navigation'))
const Home = lazy(() => import('./pages/Home/Home'))
const Movies = lazy(() => import('./pages/Movies/Movies'))
const MovieDetails = lazy(() => import('./pages/MovieDetails/MovieDetails'))
const Cast = lazy(() => import('./Cast/Cast'))
const Reviews = lazy(() => import('./Reviews/Reviews'))
const NotFound = lazy(() => import('./pages/NotFound/NotFound'))

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />} >
          <Route path='cast' element={<Cast />}/>
          <Route path='reviews' element={<Reviews />}/>
        </Route>
      </Route>
      <Route path='*' element = {<NotFound />}/>
    </Routes>
  );
}
