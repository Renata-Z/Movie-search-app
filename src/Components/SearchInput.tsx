import React from 'react';
import { MovieList } from '../utils/types';
import { DropdownMenu } from './DropdownMenu';

interface Props {
  value: string;
  showDropdown: boolean;
  moviesList?: MovieList[];
  loadingMoviesData: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onItemClick: () => void;
}

export const SearchInput = ({ value, showDropdown, moviesList, loadingMoviesData, onChange, onItemClick }: Props) => {
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
      />
      {moviesList && showDropdown ?
        <DropdownMenu optionsArr={moviesList} onItemClick={onItemClick} />
        : null}
    </div>
  );
};
