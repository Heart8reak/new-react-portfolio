import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import Header from './components/Header';
import HomePage from './components/HomePage';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <main>
        <Header />
        <Route exact path="/" component={HomePage} />
        <Route path="/projects" component={Projects} />
      </main>
    </div>
  );
}

export default App;
