import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './functionalComponents/hello';
import World from './classComponents/world';
import TwoWayDataBinding from './classComponents/twoWayDataBinding'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
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

        {/* <Hello name='Guava' rate ='BDT 100'></Hello>
        <Hello name='Mango' rate ='BDT 200'></Hello>
        <Hello name='Apple' rate ='BDT 300'></Hello>
        <Hello name='Orange' rate ='BDT 400'></Hello>
        <Hello name='Grape' rate ='BDT 500'></Hello> */}
        {/* <World></World> */}

        <World></World>
        <TwoWayDataBinding></TwoWayDataBinding>


      </header>
    </div>
  );
}

export default App;