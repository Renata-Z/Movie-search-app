import { MovieList } from "../utils/types";

export interface MovieSearchState {
  inputValue: string;
  showMoviesDropdown: boolean;
  loadingMoviesData: boolean;
  moviesList?: MovieList[];
  errorMovieData: boolean;
}

export const initialMovieSearchState: MovieSearchState = {
  inputValue: "",
  showMoviesDropdown: false,
  loadingMoviesData: false,
  moviesList: undefined,
  errorMovieData: false,
};

export type MovieSearchAction =
  | {
      type: "PAGE_INITIALIZED";
      showDropdown: boolean;
    }
  | {
      type: "SET_INPUT_VALUE";
      value: string;
    }
  | {
      type: "SHOW_MOVIES_DROPDOWN";
    }
  | {
      type: "LOADING_MOVIES_DATA";
    }
  | {
      type: "SET_MOVIES_LIST";
      data: MovieList[];
    }
  | {
      type: "ERROR_MOVIES_DATA";
    };
