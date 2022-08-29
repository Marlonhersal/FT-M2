import React from 'react';
import Card from './Card';
import s from "./cards.module.css"


export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  if(!props){
    return <h1 className={s.error}>No se encontro a la api</h1>
  }
  return <div className={s.contenedor}>
    {
      
      props.cities.map(ciudad =>(
        <Card
        id={ciudad.id}
        max={ciudad.max}
        min={ciudad.min}
        name={ciudad.name}
        img={ciudad.img}
        onClose={()=>{props.onClose(ciudad.id)}}
        />
      ))
    }
  </div>
};