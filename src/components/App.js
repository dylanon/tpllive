import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// Import the app's components
import Header from './Header';
import BrowserStats from './BrowserStats';
import SearchStats from './SearchStats';
import Searches from './Searches';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <BrowserStats />
          <SearchStats />
          <Searches />
        </main>
      </div>
    );
  }
}

export default App;
