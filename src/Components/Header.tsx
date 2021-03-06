import React from 'react';
import { SearchInput } from './SearchInput';

interface Props {
  onButtonSubmitClick: () => void;
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Header = ({ onButtonSubmitClick, value, onChange }: Props) => {
  return (
    <header className="App-header">
      <form className="search-container" autoComplete="off">
        {/* {!showInput && (
          <button className="button-input" onClick={onButtonInputClick}>
            <p className="button-label">Enter movie name</p>
          </button>
        )}
        {showInput && <SearchInput />} */}

        <div className="movie-icon-container">
          <img className="movie-icon" src="icons/movie.svg" alt="movie icon" />
        </div>

        <SearchInput value={value} onChange={onChange} />

        <button type="submit" className="button-submit" onClick={onButtonSubmitClick}>
          <img className="search-icon" src="icons/search.svg" alt="search icon" />
        </button>
      </form>
    </header>
  );
};
