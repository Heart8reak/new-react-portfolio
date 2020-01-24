import React from 'react';
import './App.css';

import Header from './components/Header';
import HomePage from './components/HomePage';
import Projects from './components/Projects';

import dataProject from './data/dataProject';

function App() {
  return (
    <div className="App">
      <main>
        <Header />
        <HomePage />
        <Projects dataProject={dataProject} />
      </main>
    </div>
  );
}

export default App;
