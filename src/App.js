import React, { Component } from 'react';

//CSS
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

//Components
import Dashboard from './components/Dashboard/Dashboard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Dashboard/>
      </div>
    );
  }
}

export default App;
