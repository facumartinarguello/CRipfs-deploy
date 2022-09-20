import React from 'react';
import fleekLogo from './fleek-logo.png';
import reactLogo from './react-logo.svg';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={fleekLogo} className="Fleek-logo" alt="fleek-logo" />
        <span className="Big-plus">+</span>
        <img src={reactLogo} className="React-logo" alt="react-logo" />
        <p>
          React App deployed on IPFS through Fleek for Blo .
        </p>
        <a
          className="App-link"
          href="https://docs.fleek.co"
          target="_blank"
          rel="noopener noreferrer"
        >
         React+Fleek+blo: Boom!!
        </a>
      </header>
    </div>
  );
}

export default App;
