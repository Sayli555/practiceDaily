import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Todo from './components/todo/Todo';
import Counter from './components/counter/Counter';

function App() {



  return (
    <div className="App">
        {/* <Todo/> */}
        <Counter/>
    </div>
  );
}

export default App;
