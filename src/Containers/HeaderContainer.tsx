import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { Header } from '../Components/Header';
import { MovieList, MovieApiData } from '../utils/types';

export const HeaderContainer = () => {
  const [inputValue, setinputValue] = useState('');
  const [movieList, setMovieList] = useState<MovieList[]>([]);

  useEffect(() => {
    const apiKey = 'e28f9fb961ad7686205a9e20b8f92dcb';
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${inputValue}`;
    if (inputValue.length >= 3) {
      axios.get(url).then((response: AxiosResponse<MovieApiData>) => {
        const { data } = response;
        const firstEightMovies = data.results.slice(0, 8);
        setMovieList(firstEightMovies);
      });
    }
  });

  const onButtonSubmitClick = () => {
    console.log('searching');
  };

  const openAutocomplete = () => {
    if (movieList) {
      console.log(movieList);
    }
  };

  return (
    <Header
      onButtonSubmitClick={onButtonSubmitClick}
      value={inputValue}
      onChange={(e) => setinputValue(e.target.value)}
    />
  );
};
