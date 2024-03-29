import React from 'react';
import { MovieList } from '../utils/types';
import { DropdownMenu } from './DropdownMenu';

interface Props {
  value: string;
  showDropdown: boolean;
  moviesList?: MovieList[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onItemClick: (title: string) => void;
  onInputFocus: () => void;
  onInputBlur: () => void;
}

export const SearchInput = ({ value, showDropdown, moviesList, onChange, onItemClick, onInputFocus, onInputBlur }: Props) => {
  return (
    <div className="autocomplete">

      <input
        className="search-input"
        id="movieSearchInput"
        type="text"
        list="movie-list"
        placeholder="Enter movie name"
        autoComplete="off"
        value={value}
        onChange={(e) => onChange(e)}
        onFocus={onInputFocus}
        onBlur={onInputBlur}
      />

      <div className="movie-icon-input">
        <img className="movie-icon-black" src="icons/movie.svg" alt="movie icon" />
      </div>

      <p className={`input-label ${value.length > 0 && "visible" }`}> Enter movie name</p>

      {moviesList && showDropdown &&
        <DropdownMenu optionsArr={moviesList} onItemClick={onItemClick} /> }
    </div>
  );
};
