import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Button from './components/button/button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button onClick={() => console.log('here')}>A button</Button>
      </div>
    );
  }
}

export default App;
