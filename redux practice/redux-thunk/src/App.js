import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import CounterApp from './pages/CounterApp';
import TodoApp from './pages/TodoApp';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <Routes>
        <Route path='/' element={<CounterApp/>} />
        <Route path="/todo" element={<TodoApp/>} />
      </Routes>
    </div>
  );
}

export default App;
