import React, { Component } from 'react';
import './App.css';
import MarsSurfaceContainer from './components/mars_surface_container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MarsSurfaceContainer />
      </div>
    );
  }
}

export default App;
