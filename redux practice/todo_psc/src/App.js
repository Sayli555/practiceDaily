import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos';
import TodoPost from './components/TodoPost';
import {Routes,Route,Link} from "react-router-dom"
import TodoSingle from './components/TodoSingle';

function App() {
  return (
    <div className="App">
      
      <Routes>
          <Route path="/todos" element={<TodoPost/>} />
          <Route path="/todos/:id" element={<TodoSingle/>} />
          <Route path="/" element={<Todos/>} />
      </Routes>
    </div>
  );
}

export default App;
