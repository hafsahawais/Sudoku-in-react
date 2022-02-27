import React from 'react';
import Board from './components/Board/board';
import './App.css'


const App = () => {

  return (
    <div className='App'>
      <div className='App-header'>
          <h1>Sudoku</h1>
          <Board />

      </div>
    </div>
  );
};



export default App;
