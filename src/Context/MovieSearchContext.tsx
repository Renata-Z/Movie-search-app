import React, { Dispatch, ReactElement, useContext, useReducer } from "react";
import { initialMovieSearchState, MovieSearchAction } from './initialStateAndTypes';
import { movieSearchReducer } from './movieSearchReducer';

const MovieSearchStateContext = React.createContext({ state: initialMovieSearchState });
const MovieSearchDispatchContext = React.createContext<{
  dispatch: Dispatch<MovieSearchAction>
}>({ dispatch: () => { } });

export const MovieSearchProvider = ({ children }: { children: ReactElement }) => {
  const [state, dispatch] = useReducer(movieSearchReducer, initialMovieSearchState);

  return (
    <MovieSearchStateContext.Provider value={{ state }}>
      <MovieSearchDispatchContext.Provider
        value={{
          dispatch
        }}
      >
        {children}
      </MovieSearchDispatchContext.Provider>
    </MovieSearchStateContext.Provider>
  );
};

export const useMovieSearchState = () => useContext(MovieSearchStateContext);
export const useMovieSearchDispatch = () => useContext(MovieSearchDispatchContext);