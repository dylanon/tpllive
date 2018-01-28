import React, { Component } from 'react';
import './App.css';

// Import the app's components
import Header from './Header';
import About from './About';
import BrowserStats from './BrowserStats';
// import SearchStats from './SearchStats';
import Searches from './Searches';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main className="main">
          <About />
          <div className="main__flex-container">
            <BrowserStats />
            {/* <SearchStats /> */}
            <Searches />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
