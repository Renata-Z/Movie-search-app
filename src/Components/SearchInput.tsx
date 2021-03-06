import React from 'react';
import { MovieList } from '../utils/types';
import { DropdownMenu } from './DropdownMenu';

interface Props {
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  showDropdown: boolean;
  movieList: MovieList[];
  onItemClick: () => void;
}

export const SearchInput = ({ value, onChange, showDropdown, movieList, onItemClick }: Props) => {
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
      {showDropdown && <DropdownMenu optionsArr={movieList} onItemClick={onItemClick} />}
    </div>
  );
};
