import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greetings from "./Greetings";

const App = () => (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Marie has just started studying React. 
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://vk.com/mariecolesnic"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Marie's VK
          </a>
        </header>
      </div>
);

export default App;
