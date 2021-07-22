import axios, { AxiosResponse } from 'axios';
import { FormEvent, useCallback, useEffect, useState } from 'react';
import { SearchInput } from '../Components/SearchInput';
import { SubmitButton } from '../Components/SubmitButton';
import { ActionTypes } from '../Context/actionTypes';
import { useMovieSearchDispatch, useMovieSearchState } from '../Context/MovieSearchContext';
import { MovieApiData } from '../utils/types';

export const Header = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);

  const { state: {
    inputValue,
    showMoviesDropdown,
    moviesList
  } } = useMovieSearchState();
  const { dispatch } = useMovieSearchDispatch();

  const closeDropdown = useCallback(() => {
    dispatch({ type: ActionTypes.SHOW_MOVIES_DROPDOWN, isShown: false })
  }, [dispatch]);

  useEffect(() => {
    const apiKey = '';
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${inputValue}`;
    if (isInputFocused && inputValue.length >= 3) {
      dispatch({ type: ActionTypes.LOADING_MOVIES_DATA })
      try {
        axios.get(url).then((response: AxiosResponse<MovieApiData>) => {
          const { data } = response;
          const firstEightMovies = data.results.slice(0, 8);
          dispatch({ type: ActionTypes.SET_MOVIES_LIST, data: firstEightMovies });
        });
        const clickHandler = () => {
          closeDropdown();
        }
        document.addEventListener('click', clickHandler);
        return () => {
          document.removeEventListener('click', clickHandler);
        }
      }
      catch (error) {
        dispatch({ type: ActionTypes.ERROR_MOVIES_DATA });
      }
    } else {
      dispatch({ type: ActionTypes.SET_MOVIES_LIST });
    }
  }, [inputValue, dispatch, closeDropdown, isInputFocused]);

  const setInputValue = (value: string) => {
    dispatch({ type: ActionTypes.SET_INPUT_VALUE, value });
  }

  const onButtonSubmitClick = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  const onItemClick = (title: string) => {
    setInputValue(title);
    closeDropdown();
  }

  const onInputFocus = () => {
    setIsInputFocused(true);
  }

  const onInputBlur = () => {
    setIsInputFocused(false);
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
          moviesList={moviesList}
          onChange={(e) => setInputValue(e.target.value)}
          onItemClick={onItemClick}
          onInputFocus={onInputFocus}
          onInputBlur={onInputBlur}
        />

        <SubmitButton />

      </form>
    </header>
  );
};

