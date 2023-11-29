import HomePage from 'pages/HomePage';
import MovieDetails from 'pages/MovieDetailsPage';
import { Routes, Route } from 'react-router-dom';
import { AppLayout } from './appLayout/AppLayout';
import Cast from './cast/Cast';
import Reviews from './reviews/Reviews';
import { SearchBar } from './searchBar/SearchBar';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<SearchBar />} />

          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
