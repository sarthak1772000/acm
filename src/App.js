import React, { Component } from 'react';
import logo from './logo.svg';
import {Navbar, NavbarBrand} from 'reactstrap';
import './App.css';
import Home from './components/HomeComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        < Home />
      </div>
    );
  }
}

export default App;
