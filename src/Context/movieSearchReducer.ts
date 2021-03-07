import { MovieSearchState } from "./initialStateAndTypes";

export const movieSearchReducer = (state: MovieSearchState, action: any) => {
  console.log(state, action);
  switch (action.type) {
    case "SET_INPUT_VALUE":
      return {
        ...state,
        inputValue: action.value,
      };
    case "LOADING_MOVIES_DATA":
      return {
        ...state,
        loadingMoviesData: true,
      };
    case "SET_MOVIES_LIST":
      return {
        ...state,
        loadingMoviesData: false,
        moviesList: action.data,
        showMoviesDropdown: true,
      };
    case "ERROR_MOVIES_DATA":
      return {
        ...state,
        loadingMoviesData: false,
        errorMovieData: true,
      };
    default:
      return state;
  }
};
