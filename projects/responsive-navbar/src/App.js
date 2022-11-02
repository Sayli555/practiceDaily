import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Signup from './components/Signup';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/skills" element={<Skills/>} />
      </Routes>
    </div>
  );
}

export default App;
