import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Offers from './components/Offers';
import Filter from './components/Filter';
import Restaurents from './components/Restaurents';
import userinfo from "./data/userinfo.json"

function App() {
  return (
    <div className="App">
        <Navbar {...userinfo} />
        <Offers/>


        <section className="near-you">
        <Filter/>
        <Restaurents/>
        </section>
       
    </div>
  );
}

export default App;
