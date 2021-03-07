import React from 'react';
import './App.scss';
import { ContentContainer } from './Containers/ContentContainer';
import { Header } from './Containers/Header';
import { MovieSearchProvider, useMovieSearchState } from './Context/MovieSearchContext';

const App = () => {
  const { state } = useMovieSearchState();
  return (
    <MovieSearchProvider>
      <div className="App">
        <Header />
        <ContentContainer />
      </div>
    </MovieSearchProvider>
  );
};

export default App;
