import React from 'react';
import s from "./card.module.css"
import { Link } from 'react-router-dom';



export default function Card(props) {
  // acá va tu código
  return <div className={s.contenedor}>
    <button onClick={props.onClose}>X</button>
    <Link to={`/ciudad/${props.id}`}>{props.name}</Link>
    <div>
     <p>Min:{props.min}</p>
     <p>Max:{props.max}</p>
     </div>
    <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="Imagen del las nubes"></img>
  </div>
};