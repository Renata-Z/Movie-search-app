import './App.scss';
import { ContentContainer } from './Containers/ContentContainer';
import { Header } from './Containers/Header';
import { MovieSearchProvider } from './Context/MovieSearchContext';

const App = () => {
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
