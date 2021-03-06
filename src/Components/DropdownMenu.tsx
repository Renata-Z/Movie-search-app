import React from 'react';
import { MovieList } from '../utils/types';

interface Props {
  onItemClick: () => void;
  optionsArr: MovieList[];
  // movieTitle: string;
  // rating: number;
  // releaseYear: number;
}

export const DropdownMenu = ({ onItemClick, optionsArr }: Props) => {
  return (
    <ul className="autocomplete-list">
      {
        optionsArr.map(movie =>
          <li
            className="autocomplete-item"
            key={`${movie.title} ${movie.release_date}`}
            onClick={onItemClick}>

            <p className="title">{movie.title}</p>
            <p>
              <span>{movie.vote_average} </span>
              <span>Rating, </span>
              <span>{movie.release_date}</span>
            </p>
          </li>
        )
      }
    </ul >
  );
};
