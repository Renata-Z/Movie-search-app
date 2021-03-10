import { getYear } from '../utils/functions';
import { MovieList } from '../utils/types';

interface Props {
  onItemClick: (title: string) => void;
  optionsArr: MovieList[];
}

export const DropdownMenu = ({ onItemClick, optionsArr }: Props) => {
  console.log(optionsArr)
  return (
    <ul className="autocomplete-list">
      {
        optionsArr.length ? (
          optionsArr.map(movie =>
            <li
              className="autocomplete-item"
              key={`${movie.title} ${movie.release_date}`}
              onClick={() => onItemClick(movie.title)}>

              <p className="title">{movie.title}</p>
              <p>
                <span>{movie.vote_average} </span>
                <span>Rating, </span>
                <span>{movie.release_date ? getYear(movie.release_date) : '-'}</span>
              </p>
            </li>
          ))
          : (
            <li className="autocomplete-item" >
              <p className="title">No match found</p>
            </li>
          )
      }
    </ul >
  );
};
