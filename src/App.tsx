import './App.scss';
import { ContentContainer } from './Containers/ContentContainer';
import { Header } from './Containers/Header';
import { AppContextProvider } from './Context/MovieSearchContext';
// import { MovieSearchProvider } from './Context/MovieSearchContext';

const App = () => {
  return (
    <AppContextProvider>
      <div className="App">
        <Header />
        <ContentContainer />
      </div>
    </AppContextProvider>
    // <MovieSearchProvider>
    //   <div className="App">
    //     <Header />
    //     <ContentContainer />
    //   </div>
    // </MovieSearchProvider>
  );
};

export default App;
