import React from 'react';
import s from "./estilosNombre.css"

export default function ({nombre,edad}){
    return <div className={s.presentacion}>My names is {nombre} i´m {edad} years old</div>
}