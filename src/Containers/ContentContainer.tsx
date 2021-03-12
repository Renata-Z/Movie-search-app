import React from 'react';
import { useAppContext } from '../Context/MovieSearchContext';

export const ContentContainer = () => {
  const { isLoading, isError } = useAppContext();

  return (
    <main className="content-wrapper">
      {
        isError && <p className="error-message">An error occured. Please try again later</p>
      }

      {
        isLoading && <img src='images/loader.gif' alt="loading" className='loader' />
      }

    </main>
  );
};
