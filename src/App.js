import React, { useState } from 'react';
import "./App.css"
import SearchField from './search.js';
import CountryDiv from './container.js';
import CountryInfo from './api.js';

function App() {
  return (
    <div className="App">
      <CountryInfo />
    </div>
  );
}

export default App;
