import React, { FormEvent } from 'react';
import { useMovieSearchState } from '../Context/MovieSearchContext';
import { SearchInput } from './SearchInput';
import { SubmitButton } from './SubmitButton';

interface Props {
  onButtonSubmitClick: (e: FormEvent<HTMLFormElement>) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onItemClick: () => void;
}

export const Header = ({ onButtonSubmitClick, onChange, onItemClick }: Props) => {
  const { state: {
    inputValue,
    showMoviesDropdown,
    loadingMoviesData,
    moviesList
  } } = useMovieSearchState();

  return (
    <header className="App-header">
      <form className="search-container" autoComplete="off" onSubmit={onButtonSubmitClick}>

        <div className="movie-icon-container">
          <img className="movie-icon" src="icons/movie.svg" alt="movie icon" />
        </div>

        <SearchInput
          value={inputValue}
          showDropdown={showMoviesDropdown}
          loadingMoviesData={loadingMoviesData}
          moviesList={moviesList}
          onChange={onChange} onItemClick={onItemClick} />

        <SubmitButton />

      </form>
    </header>
  );
};
