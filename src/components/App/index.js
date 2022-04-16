import './styles.scss';
import Header from 'src/components/Header';
import SearchBar from 'src/components/SearchBar';
import Card from 'src/components/Card';


function App() {
  return (
    <div className="app">
      <Header />
      <SearchBar />
      <Card />
    </div>
  );
}

export default App;
