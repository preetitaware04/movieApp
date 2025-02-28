import './App.css';
import { useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddFavourites from './components/AddFavourites';
import RemoveFavourites from './components/RemoveFavourites';

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

  const RemoveFavouritesMovie = (movie) => {
    const newFavouriteMovie = favourites.filter(
      (favourite) => favourite.imdbID != movie.imdbID
    );
    setFavourites(newFavouriteMovie);
  };
  return (
    <>
      <div className='max-w-7xl mx-auto pt-10 pb-3 flex justify-between items-center'>
        <MovieListHeading heading={'Movies'} />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <MovieList
        movies={movies}
        handleFavouritesList={AddFavouritesMovie}
        favouritesComponent={AddFavourites}
      />

      <div className='max-w-7xl mx-auto pt-10 pb-3 flex justify-between items-center'>
        <MovieListHeading heading={'Favourites'} />
      </div>
      <MovieList
        movies={favourites}
        handleFavouritesList={RemoveFavouritesMovie}
        favouritesComponent={RemoveFavourites}
      />
    </>
  );
}

export default App;
