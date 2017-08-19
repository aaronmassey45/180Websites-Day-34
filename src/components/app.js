import React, { Component } from 'react';
import Navbar from './navbar';
import Header from './header';
import UserDisplay from './users';
import '../App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Header />
          <UserDisplay />
        </div>
      </div>

    );
  }
}
