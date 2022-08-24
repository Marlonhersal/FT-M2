import React from 'react';
import f from "./searchbar.module.css"

export default function SearchBar(props) {
  // acá va tu código
  return <div className={f.contenedor}><input type="text" placeholder='Buscar clima en?'/>
  <button onClick={() => alert("ciudad")}>Buscar</button></div>
};