import React from 'react';
import './App.scss';
import { HeaderContainer } from './Containers/HeaderContainer';

const App = () => {
  return (
    <div className="App">
      <HeaderContainer />

      <main className="content-wrapper"></main>
    </div>
  );
};

export default App;
