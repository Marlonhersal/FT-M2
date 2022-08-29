import React from "react";
import SearchBar from "./SearchBar"
import E from "./navBar.module.css"
import { Link } from 'react-router-dom';



export default function navBar(props){
    return <div className={E.nav}>
        <Link to="/">
        <div className={E.cajaLogo}>     
        <span className={E.logo}></span>
        <p>Henrry - Weather App</p>
        </div>
        </Link>
        <Link to='/about'>
        <span>About</span>
      </Link>
        <SearchBar onSearch={props.onSearch}/>
        </div>
}


