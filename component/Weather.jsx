import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Image from 'next/image';
import moment from 'moment-timezone';

const Weather = ({ weatherData }) => {
   // Fonction pour obtenir l'heure locale à partir de l'heure UTC et du fuseau horaire
   const getLocalTime = (utcTime, timezoneOffset) => {
    const timezoneName = moment.tz.guess(); // Devinez automatiquement le nom du fuseau horaire
    const timezone = moment.tz.zone(timezoneName);
    const offsetSeconds = timezoneOffset;
    const localTime = moment(utcTime).utcOffset(offsetSeconds / 60).format('HH:mm');
    return localTime;
};
  return (
    <>
    <div className='container'>
    <div className='bg-secondary-subtle border rounded mt-4  '>
      <div className='pt-3 pb-2 row'>
      <h2>
    {weatherData.name} ({weatherData.sys.country}) - {getLocalTime(new Date(), weatherData.timezone)}
</h2>
        <div className='col-1'></div>
        <div className='d-flex justify-content-center p-3  col-10'>
          <div className=' col'>

            <Image
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt="Weather Icon"
              width='100'
              height='100'
            />


            <p className='fs-5'>{weatherData.weather[0].description}</p>
          </div>
          <div className='d-flex justify-content-center align-items-center fs-1 col'>
            <p className='fw-bold'>{Math.floor(weatherData.main.temp)}°C</p>
          </div>
        </div>
      </div>
      
    </div>
    <div className='bg-dark p-3 mt-3 rounded bg-opacity-50 text-light text-center d-flex justify-content-center mb-'>
      <div className='row'>
          <div className="col  p-3 ">
            <p className='fs-5'>Humidité  <br></br><span className='fs-2 fw-bold'>{weatherData.main.humidity}%</span></p>
          </div>
          <div className="col p-3 ">
            <p className='fs-5'>Vent <br></br><span className='fs-2 fw-bold'>{Math.floor(weatherData.wind.speed * 3.6)}km/h</span></p>
          </div>
          <div className="col p-3 ">
            <p className='fs-5'>Ressenti <br></br><span className='fs-2 fw-bold'>{Math.floor(weatherData.main.feels_like)}°C</span> </p>
            
          </div>
      </div>

    </div>
    </div>
    </>
  );
};


export default Weather
