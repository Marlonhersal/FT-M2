import React from 'react';
import './App.css';

import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import data, { Cairns } from './data.js';
import "./components/card.module.css"
import Titulo from "./components/titulo.jsx"

function App() {
  return (
    <div className="App">
        <Titulo/>
       <div>
        <SearchBar
          onSearch={(ciudad) => alert(ciudad)}
        />
      </div>
      <hr />
      <div>
        <Cards 
          cities={data}
        />
      </div>
      <hr />
     
    </div>
  );
}

export default App;
