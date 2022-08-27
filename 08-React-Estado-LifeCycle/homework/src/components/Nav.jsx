import React from "react";
import SearchBar from "./SearchBar"
import E from "./navBar.module.css"



export default function navBar(props){
    return <div className={E.nav}>
        <div className={E.cajaLogo}>     
        <span className={E.logo}></span>
        <p>Henrry - Weather App</p>
        </div>
        {
        <SearchBar onSearch={props.onSearch}/>
        }</div>
}


