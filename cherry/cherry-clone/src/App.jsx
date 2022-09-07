import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Offers from './components/Offers';
import Filter from './components/Filter';
import Restaurents from './components/Restaurents';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Offers/>
        <Filter/>
        <Restaurents/>
    </div>
  );
}

export default App;
