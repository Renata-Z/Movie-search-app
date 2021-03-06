import React from 'react';

interface Props {
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchInput = ({ value, onChange }: Props) => {
  return (
    <div className="autocomplete">
      <input
        className="search-input"
        type="text"
        list="movie-list"
        placeholder="Enter movie name"
        autoComplete="off"
        value={value}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
};
