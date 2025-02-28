import './App.css';
import { useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState();
  const [favourites, setFavourites] = useState([]);

  const getMoviesList = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=f6414c4e`;

    const response = await fetch(url);
    const jsonResponse = await response.json();

    if (jsonResponse.Search) {
      setMovies(jsonResponse.Search);
    }
  };

  useEffect(() => {
    getMoviesList(searchValue);
  }, [searchValue]);

  const AddFavouritesMovie = (movie) => {
    const newFavouriteMovie = [...favourites, movie];
    setFavourites(newFavouriteMovie);
  };
  return (
    <>
      <MovieListHeading
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <MovieList movies={movies} handleFavouritesList={AddFavouritesMovie} />
    </>
  );
}

export default App;
