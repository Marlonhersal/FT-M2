import React from "react";
import E from "./titulo.module.css"

export default function title(props){
    return <div className={E.contenedor}><h1 className={E.titulo}>Clima</h1></div>
}
