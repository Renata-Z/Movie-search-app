import React from 'react';
import { useMovieSearchState } from '../Context/MovieSearchContext';

export const ContentContainer = () => {
  const { state: {
    errorMovieData,
    loadingMoviesData
  } } = useMovieSearchState();

  return (
    <main className="content-wrapper">
      {
        errorMovieData && <p className="error-message">An error occured. Please try again later</p>
      }

      {
        loadingMoviesData && <img src='images/loader.gif' alt="loading" className='loader' />
      }

    </main>
  );
};
