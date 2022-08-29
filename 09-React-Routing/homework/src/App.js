import React, {useState} from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import NavBar from './components/nav.jsx';
import Cards from "./components/Cards.jsx"
import about from './components/About';
import Ciudad from "./components/Ciudad"

export default function App() {
  const [cities,setCities] = useState([])

  
  function onSearch(ciudad) {
    //Acá habría que hacer el llamado a la API para obtener los datos de la ciudad
    //pero de momento agregaremos una ciudad por default para ver que funcione
    const llave = '4ae2636d8dfbdc3044bede63951a019b'

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${llave}&units=metric`)
    .then(data => data.json())
    .then((recurso) => {
      if(recurso.main !== undefined){
        const ciudad = {
          min: Math.round(recurso.main.temp_min),
          max: Math.round(recurso.main.temp_max),
          img: recurso.weather[0].icon,
          id: recurso.id,
          wind: recurso.wind.speed,
          temp: recurso.main.temp,
          name: recurso.name,
          weather: recurso.weather[0].main,
          clouds: recurso.clouds.all,
          latitud: recurso.coord.lat,
          longitud: recurso.coord.lon
        };
        setCities(oldCities => [...oldCities, ciudad]);
      } else {
        alert("Ciudad no encontrada");
      }
    });
  }
  

  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id != id));
  }

  return (
    <div className="App">  
    <Route path="/" render={()=><NavBar onSearch={onSearch} />}/>
    <Route path="/" exact><Cards cities = {cities} onClose={onClose}/></Route>
    <Route path="/about" component={about}/>
    <Route path="/ciudad/:idciudad" render={(propiedad)=><Ciudad city={cities.filter(ciud => ciud.id == propiedad.match.params.idciudad)[0]} />}/>
  </div>
  )
}