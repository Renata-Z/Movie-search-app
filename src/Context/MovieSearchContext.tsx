import React, { Dispatch, ReactElement, SetStateAction, useContext, useReducer, useState } from "react";
import { MovieList } from '../utils/types';
import { initialMovieSearchState, MovieSearchAction } from './initialStateAndTypes';
import { movieSearchReducer } from './movieSearchReducer';

// const MovieSearchStateContext = React.createContext({ state: initialMovieSearchState });
// const MovieSearchDispatchContext = React.createContext<{
//   dispatch: Dispatch<MovieSearchAction>
// }>({ dispatch: () => { } });

// export const MovieSearchProvider = ({ children }: { children: ReactElement }) => {
//   const [state, dispatch] = useReducer(movieSearchReducer, initialMovieSearchState);

//   return (
//     <MovieSearchStateContext.Provider value={{ state }}>
//       <MovieSearchDispatchContext.Provider
//         value={{
//           dispatch
//         }}
//       >
//         {children}
//       </MovieSearchDispatchContext.Provider>
//     </MovieSearchStateContext.Provider>
//   );
// };

// export const useMovieSearchState = () => useContext(MovieSearchStateContext);
// export const useMovieSearchDispatch = () => useContext(MovieSearchDispatchContext);



interface ContentProps {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  selectedMovie?: string,
  setSelectedMovie: Dispatch<SetStateAction<string>>,
  isError: boolean,
  setIsError: Dispatch<SetStateAction<boolean>>
}

// const initialState = {
//   isLoading: false,
//   setIsLoading: () => {},
//   selectedMovie: undefined,
//   setSelectedMovie: undefined,
//   isError: false,
//   setIsError: undefined,
// }

// const AppContext = React.createContext(initialState);
const AppContext = React.createContext <Partial<ContentProps>>({}); //jei nenurodau Partial, tai meta klaidą

export const AppContextProvider = ({ children }: { children: ReactElement }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState('');
  const [isError, setIsError] = useState(false);

  return (
    <AppContext.Provider
      value={{
        isLoading,
        setIsLoading,
        selectedMovie,
        setSelectedMovie,
        isError,
        setIsError
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);