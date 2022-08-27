import React, { useState } from 'react';
import f from "./searchbar.module.css"

export default function SearchBar({onSearch}) {
  // acá va tu código
  const [cities, setCities] = useState("");
  return <form onSubmit={(e)=>{
     e.preventDefault()
     onSearch(cities);
      }} className={f.contenedor}>
        
      <input className="ciudad" type="text" placeholder='Buscar clima en?' onChange={
        (e)=>{setCities(oldValue =>  e.target.value)}
      } />
      <input type="submit" value="Buscar"/>
    </form> 
};