import React from 'react';

export default function Card(props) {
  // acá va tu código
  return <div>
    <button onClick={props.onClose}>X</button>
    <h6>{props.name}</h6>
    <div>
     <p>Min:{props.min}</p> 
     <p>Max:{props.max}</p>
     </div>
    <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="Imagen del las nubes"></img>
  </div>
};