import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    inputValue: '',
  };

  handleChange = event => {
    const value = event.target.value;
    this.setState({ inputValue: value });
  };

  handleKeyDown = event => {
    console.log(event.keyCode);

    //if (event.keyCode === 13) {
    //  const {inputValue, todos} = this.state;
    //  const newTodo = {value: inputValue, done: false, id: getTodoId()};

    //  this.setState({inputValue: '', todos: [...todos, newTodo]});
    //}
  };

  render() {
    const { inputValue } = this.state;
    console.log(this.state);

    return (
      <div className="App" >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
            </p>
        <input
          value={inputValue}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          className="input"
        />
      </div >

    );
  }
}

export default App;
