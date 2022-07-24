import React,{useState, useEffect} from 'react'
import axios from "axios";

function Weather() {

  const[lat, setLat] = useState("");
  const[lon, setLon] = useState("");
  const[city, setCity] = useState("");
  const[weather, setWeather] = useState([]);
  // const[info, setInfo] = useState({
  //   lat: "",
  //   lon: ""
  // });




  const handleSubmit = async(e) => {
    e.preventDefault();
    await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATAHER_KEY}&units=metric`)
        .then(res => res.json())
        .then(data => setWeather(data))
        
  }
  const handleSubmitTwo = async(e) => {
    e.preventDefault();
    
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATAHER_KEY}&units=metric`)
        .then(res => res.json())
        .then(data => setWeather(data))
    
  }
  
  useEffect(() => {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
            setLat(position.coords.latitude);
            setLon(position.coords.longitude);
        })
    }
  }, [])
  const handleClick = (e) => {
  //  e.preventDefault();
  // const getGeo = {
  //   lat: info.lat,
  //   lon: info.lon
  // }
  //  axios.post("http://localhost:3001/create", getGeo)
   
  }
  return (
    <div className="weather">
        <div className="left">
            <form onSubmit={handleSubmit}> 
                <input type="text" required placeholder="lat" value={lat} onChange={e => setLat(e.target.value)}></input>
                <br></br>
                <input type="text" required placeholder="lng" value={lon} onChange={e => setLon(e.target.value)}></input>
                <br></br>
                <button disabled={!lat || !lon} type="submit" onClick={handleClick}>Hava Bilgisi</button>
                {/* <button disabled={!lat || !lon} onClick={handleClick}>Save Database</button> */}
            </form>
            <form onSubmit={handleSubmitTwo}>
                <input type="text" required placeholder="city" value={city} onChange={e => setCity(e.target.value)}></input>
                <br></br>
                <button disabled={!city} type="submit" onClick={handleClick}>By City</button>
            </form>
        </div>
        {typeof weather.main != "undefined"
         ? <div className="right">
                <div className="cityName">City: <strong>{weather.name}</strong></div>
                <div className="cityDerece">Feels Like: <strong>{weather.main.feels_like}</strong></div>
                <div className="cityWeather">Weather: <strong>{weather.weather[0].description}</strong></div>
           </div>
         : ""}
        {typeof city.main != "undefined"
         ? <div className="right">
                <div className="cityName">City: <strong>{city.name}</strong></div>
                <div className="cityDerece">Feels Like: <strong>{city.main.feels_like}</strong></div>
                <div className="cityWeather">Weather: <strong>{city.weather[0].description}</strong></div>
           </div>
         : ""}
        
    </div>
  )
}

export default Weather