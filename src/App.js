import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './functionalComponents/hello';
import World from './classComponents/world';
import TwoWayDataBinding from './classComponents/twoWayDataBinding'

class App extends React.Component {
  state = {
    age: ''
  }
  formSubmit=(event)=>{
    event.preventDefault()
  }
  render() {
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
          {/* <World></World> */}
          {/* <TwoWayDataBinding></TwoWayDataBinding> */}
          <h1><strong>Welcome</strong></h1>
          <div>
            <form onSubmit={this.formSubmit}>
              <div className='form-group' style={{ margin: 200 }}>
                {/* <label>Username: </label>
                <input type='text' name='username'></input> */}
                <br></br>
                <label>Age: </label>
                <select onChange={(event)=>{this.setState({ age:event.target.value })}} name='age'>
                  <option value='15-20'>15-20</option>
                  <option value='15-20'>21-25</option>
                  <option value='15-20'>26-30</option>
                  <option value='15-20'>31-above</option>
                </select>
                <br></br>
                <h6>Age is {this.state.age}</h6>
                <br></br>
                <button type='submit'>Submit</button>
              </div>
            </form>
          </div>
        </header>
      </div>
    );
  }
}

export default App;