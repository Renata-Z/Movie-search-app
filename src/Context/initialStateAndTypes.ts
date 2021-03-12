import { MovieList } from "../utils/types";
import { ActionTypes } from "./actionTypes";

export interface MovieSearchState {
  loadingMoviesData: boolean;
  errorMovieData: boolean
}

export const initialMovieSearchState: MovieSearchState = {
  loadingMoviesData: false,

  errorMovieData: false,
};

export type MovieSearchAction =
  | {
      type: ActionTypes.SET_INPUT_VALUE;
      value: string;
    }
  | {
      type: ActionTypes.SHOW_MOVIES_DROPDOWN;
      isShown: boolean;
    }
  | {
      type: ActionTypes.LOADING_MOVIES_DATA;
    }
  | {
      type: ActionTypes.SET_MOVIES_LIST;
      data?: MovieList[];
    }
  | {
      type: ActionTypes.ERROR_MOVIES_DATA;
    };

