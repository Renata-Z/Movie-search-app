import { ActionTypes } from './actionTypes';
import { MovieSearchAction, MovieSearchState } from "./initialStateAndTypes";

export const movieSearchReducer = (
  state: MovieSearchState,
  action: MovieSearchAction
) => {
  switch (action.type) {
    case ActionTypes.SET_INPUT_VALUE:
      return {
        ...state,
        inputValue: action.value,
      };
    case ActionTypes.LOADING_MOVIES_DATA:
      return {
        ...state,
        loadingMoviesData: true,
      };
    case ActionTypes.SET_MOVIES_LIST:
      return {
        ...state,
        loadingMoviesData: false,
        moviesList: action.data,
        showMoviesDropdown: true,
      };
    case ActionTypes.ERROR_MOVIES_DATA:
      return {
        ...state,
        loadingMoviesData: false,
        errorMovieData: true,
      };
    case ActionTypes.SHOW_MOVIES_DROPDOWN:
      return {
        ...state,
        showMoviesDropdown: action.isShown,
      };
    default:
      return state;
  }
};
