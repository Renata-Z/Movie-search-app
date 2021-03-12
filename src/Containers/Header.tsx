import axios, { AxiosResponse } from 'axios';
import { FormEvent, useCallback, useEffect, useState } from 'react';
import { SearchInput } from '../Components/SearchInput';
import { SubmitButton } from '../Components/SubmitButton';
import { useAppContext } from '../Context/MovieSearchContext';
import { MovieApiData, MovieList } from '../utils/types';

export const Header = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [moviesList, setMoviesList] = useState<MovieList[]>([]);

  const { setIsLoading, setIsError, setSelectedMovie } = useAppContext();

  const closeDropdown = useCallback(() => {
    setShowDropdown(false);
  }, []);
  const showDropdownWithMovies = useCallback((a: MovieList[]) => {
    setMoviesList(a);
    setIsLoadingFn(false);
    setShowDropdown(true);
  }, []);
  const setIsErrorFn = useCallback((a: boolean) => {
    setIsError && setIsError(a);
  }, []);
  const setIsLoadingFn = useCallback((a: boolean) => {
    setIsLoading && setIsLoading(a);
  }, []);

  useEffect(() => {
    const apiKey = 'e28f9fb961ad7686205a9e20b8f92dcb';
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${inputValue}`;
    if (isInputFocused && inputValue.length >= 3) {
      setIsLoadingFn(true);
      try {
        axios.get(url).then((response: AxiosResponse<MovieApiData>) => {
          const { data } = response;
          const firstEightMovies = data.results.slice(0, 8);
          // setMoviesList(firstEightMovies);
          // setIsLoadingFn(false);
          // setShowDropdownFn(true);
          // setShowDropdown(true);
          showDropdownWithMovies(firstEightMovies);
          console.log('a');
        });
        const clickHandler = () => {
          closeDropdown();
          // setShowDropdownFn(false);
        }
        document.addEventListener('click', clickHandler);
        return () => {
          document.removeEventListener('click', clickHandler);
        }
      }
      catch (error) {
        setIsErrorFn(true);
      }
    } else {
      // setMoviesList([]);
      closeDropdown();
      // setShowDropdownFn(false);
    }
  }, [inputValue, isInputFocused, setIsErrorFn, setIsLoadingFn]);

  const onButtonSubmitClick = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  const onItemClick = (title: string) => {
    // setInputValue(title);
    setSelectedMovie && setSelectedMovie(title);
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
          showDropdown={showDropdown}
          loadingMoviesData={false}
          moviesList={moviesList}
          onChange={(e) => setInputValue(e.target.value)}
          onItemClick={onItemClick}
          onInputFocus={() => setIsInputFocused(true)}

        />

        <SubmitButton />

      </form>
    </header>
  );
};
