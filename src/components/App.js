import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// Import the app's components
import Header from './Header';
import Searches from './Searches';
import BrowserStats from './BrowserStats';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <BrowserStats />
          <section className="content-stats">
            <h2>Search stats</h2>
          </section>
          <Searches />
        </main>
      </div>
    );
  }
}

export default App;
