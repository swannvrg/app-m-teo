'use client'
import React, { useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import Weather from '../component/Weather';
import "./globals.css";



const Home = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&units=metric&lang=fr`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }

    
  };


  return (
    <div className="background-image ">
      
    
      <title>Meteo App</title>
    
    {/* <Image src='https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' layout="fill" alt="img"/> */}
      
      <nav className="bg-dark p-2"> 
        <h2 className="text-light">Météo - App</h2>

      </nav>
      <div className="container">
      <div className=" mt-5 text-center row">
        <div className="col-3"></div>
        <div className="  col-6 row">
      <input
      className="rounded form-group col-7 offset-1  me-2 "
        type="text"
        placeholder="Entrez une ville"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeatherData}
      className="btn btn-dark  col-3">Afficher</button>
      {weatherData && <Weather weatherData={weatherData} />}
      </div>
      </div>
    </div>
    </div>
  );
};
export default Home;
