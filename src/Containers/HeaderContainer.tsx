import axios, { AxiosResponse } from 'axios';
import { FormEvent, useEffect, useState } from 'react';
import { Header } from '../Components/Header';
import { MovieList, MovieApiData } from '../utils/types';

export const HeaderContainer = () => {
  const [inputValue, setinputValue] = useState('');
  const [movieList, setMovieList] = useState<MovieList[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);

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

  useEffect(() => {
    const searchInput = document.getElementById("movieSearchInput");
    if (movieList) {
      setShowDropdown(true);
      // createDropdownMenu(searchInput, movieList);
    }
  });



  const onButtonSubmitClick = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  return (
    <Header
      onButtonSubmitClick={onButtonSubmitClick}
      value={inputValue}
      onChange={(e) => setinputValue(e.target.value)}
      showDropdown={showDropdown}
      movieList={movieList}
      onItemClick={() => setinputValue('pasirinko')}
    />
  );
};
