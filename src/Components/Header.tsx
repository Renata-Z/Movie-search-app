import React, { FormEvent } from 'react';
import { MovieList } from '../utils/types';
import { SearchInput } from './SearchInput';
import { SubmitButton } from './SubmitButton';

interface Props {
  onButtonSubmitClick: (e: FormEvent<HTMLFormElement>) => void;
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  showDropdown: boolean;
  movieList: MovieList[];
  onItemClick: () => void;
}

export const Header = ({ onButtonSubmitClick, value, onChange, showDropdown, movieList, onItemClick }: Props) => {
  return (
    <header className="App-header">
      <form className="search-container" autoComplete="off" onSubmit={onButtonSubmitClick}>

        <div className="movie-icon-container">
          <img className="movie-icon" src="icons/movie.svg" alt="movie icon" />
        </div>

        <SearchInput value={value} onChange={onChange} showDropdown={showDropdown} movieList={movieList}
          onItemClick={onItemClick} />

        <SubmitButton />

      </form>
    </header>
  );
};
