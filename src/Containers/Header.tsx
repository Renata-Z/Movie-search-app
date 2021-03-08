import axios, { AxiosResponse } from 'axios';
import React, { FormEvent, useEffect } from 'react';
import { SearchInput } from '../Components/SearchInput';
import { SubmitButton } from '../Components/SubmitButton';
import { useMovieSearchDispatch, useMovieSearchState } from '../Context/MovieSearchContext';
import { getIsInputFocused } from '../utils/functions';
import { MovieApiData } from '../utils/types';

export const Header = () => {

  const { state: {
    inputValue,
    showMoviesDropdown,
    loadingMoviesData,
    moviesList
  } } = useMovieSearchState();
  const { dispatch } = useMovieSearchDispatch();

  const closeDropdown = () => {
    dispatch({ type: 'SHOW_MOVIES_DROPDOWN', isShown: false })
    document.removeEventListener('click', closeDropdown)
  }

  useEffect(() => {
    const isInputFocused = getIsInputFocused();
    const apiKey = 'e28f9fb961ad7686205a9e20b8f92dcb';
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${inputValue}`;
    if (isInputFocused && inputValue.length >= 3) {
      dispatch({ type: 'LOADING_MOVIES_DATA' })
      try {
        axios.get(url).then((response: AxiosResponse<MovieApiData>) => {
          const { data } = response;
          const firstEightMovies = data.results.slice(0, 8);
          dispatch({ type: "SET_MOVIES_LIST", data: firstEightMovies });
        });
        document.addEventListener('click', () => closeDropdown());
      }
      catch (error) {
        dispatch({ type: 'ERROR_MOVIES_DATA' });
      }
    } else {
      dispatch({ type: "SET_MOVIES_LIST" });
      closeDropdown();
    }
  }, [inputValue, dispatch]);

  const setInputValue = (value: string) => {
    dispatch({ type: 'SET_INPUT_VALUE', value });
  }

  const onButtonSubmitClick = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  const onItemClick = (title: string) => {
    setInputValue(title);
    closeDropdown();
  }

  return (
    <header className="App-header">
      <form className="search-container" autoComplete="off" onSubmit={onButtonSubmitClick}>

        <div className="movie-icon-container">
          <img className="movie-icon-white" src="icons/movie.svg" alt="movie icon" />
        </div>

        <SearchInput
          value={inputValue}
          showDropdown={showMoviesDropdown}
          loadingMoviesData={loadingMoviesData}
          moviesList={moviesList}
          onChange={(e) => setInputValue(e.target.value)}
          onItemClick={onItemClick}
        />

        <SubmitButton />

      </form>
    </header>
  );
};
