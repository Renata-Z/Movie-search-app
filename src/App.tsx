import React from 'react';
import './App.scss';
import { ContentContainer } from './Containers/ContentContainer';
import { HeaderContainer } from './Containers/HeaderContainer';
import { MovieSearchProvider, useMovieSearchState } from './Context/MovieSearchContext';

const App = () => {
  const { state } = useMovieSearchState();
  return (
    <MovieSearchProvider>
      <div className="App">
        <HeaderContainer />
        <ContentContainer />
        {/* <main className="content-wrapper"></main> */}
      </div>
    </MovieSearchProvider>
  );
};

export default App;
