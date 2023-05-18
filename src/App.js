import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './functionalComponents/hello';
import World from './classComponents/world';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

        <Hello></Hello>
        <World></World>
      </header>
    </div>
  );
}

export default App;