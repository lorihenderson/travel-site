import React, { useState } from 'react'

const api = {
  key: '1e82713a1ceec6996ed5c3547c1504ef',
  base: 'https://api.openweathermap.org/data/2.5/',
}


export default function Weather() {

  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=imperial&APPID=${api.key}`)
    .then((res) => res.json())
    .then((result) => {
      setWeather(result)
    });
  };

  return (
    <>
      <h2> Weather </h2>
      <div>
        <input type="text" placeholder="Enter city/town" onChange={(e) => setSearch(e.target.value)} />
        <button onClick={searchPressed}> Search </button>
      </div>
      <p>{weather.name}</p>
      <p>{weather?.main.temp}°F</p>
      <div>
        <p>{weather?.weather[0].main}</p>
        <p>({weather?.weather[0].description})</p>
      </div>

    </>


  )
}
