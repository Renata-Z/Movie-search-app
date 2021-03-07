import axios, { AxiosResponse } from 'axios';
import { FormEvent, useEffect, useState } from 'react';
import { Header } from '../Components/Header';
import { useMovieSearchDispatch, useMovieSearchState } from '../Context/MovieSearchContext';
import { MovieApiData } from '../utils/types';

export const HeaderContainer = () => {
  // const [inputValue, setinputValue] = useState('');

  const { state: {
    inputValue
  } } = useMovieSearchState();
  const { dispatch } = useMovieSearchDispatch();

  useEffect(() => {
    const apiKey = 'e28f9fb961ad7686205a9e20b8f92dcb';
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${inputValue}`;
    if (inputValue.length >= 3) {
      dispatch({ type: 'LOADING_MOVIES_DATA' })
      try {
        axios.get(url).then((response: AxiosResponse<MovieApiData>) => {
          const { data } = response;
          const firstEightMovies = data.results.slice(0, 8);
          dispatch({ type: "SET_MOVIES_LIST", data: firstEightMovies })
        });
      }
      catch (error) {
        dispatch({ type: 'ERROR_MOVIES_DATA' });
      }
    }
  }, [inputValue, dispatch]);

  const onButtonSubmitClick = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  return (
    <Header
      onButtonSubmitClick={onButtonSubmitClick}
      onChange={(e) => dispatch({
        type: 'SET_INPUT_VALUE', value: e.target.value
      })}
      // onChange={(e) => setinputValue(e.target.value)}
      onItemClick={() => console.log('pasirinko')}
    />
  );
};
