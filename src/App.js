import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greetings from "./Greetings";

class SimpleForm extends React.Component {
  state = {
    firstName: "",
    firstNameError: "",
  };

  validateName = name => {
    const regex = /[A-Za-z]{3,}/;

    return !regex.test(name)
      ? "The name must contain at least three letters. Numbers and special characters are not allowed."
      : "";
  };

  onFirstNameBlur = () => {
    const { firstName } = this.state;

    const firstNameError = this.validateName( firstName );

    return this.setState({ firstNameError });
  };

  onFirstNameChange = event =>
    this.setState({
      firstName: event.target.value
    });

  render() {
    const { firstNameError, firstName } = this.state;

    return (
      <div>
        <div>
          <label>
            First name:
            <input
              type="text"
              name="firstName"
              onChange={this.onFirstNameChange}
              onBlur={this.onFirstNameBlur}
            />
            {firstNameError && <div>{firstNameError}</div>}
          </label>
        </div>

        <Greetings
          firstName={firstName}
        />
      </div>
    );
  }
}


const App = () => (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <SimpleForm />
            Marie has just started studying React. 
          </p>
          <a
            className="App-link"
            href="https://github.com/mariecolesnic/react-intro"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Marie's GitHub
          </a>
        </header>
      </div>
);

export default App;
