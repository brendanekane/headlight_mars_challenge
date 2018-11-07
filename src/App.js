import React, { Component } from 'react';
import './App.css';
import MarsSurfaceContainer from './components/mars_surface_container';
import Legend from './components/legend';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Legend />
          <MarsSurfaceContainer />
        <div className="container">
          <div className="grid-container">
            <div className="grid-cell"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
