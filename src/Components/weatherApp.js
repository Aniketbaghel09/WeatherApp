// Components/weatherApp.js
import React, { useState } from 'react';
import './WeatherApp.css';
import search_icon from './Assets/search.png';
import clear_icon from './Assets/clear.png';
import cloud_icon from './Assets/cloud.png';
import drizzle_icon from './Assets/drizzle.png';
import humidity_icon from './Assets/humidity.png';
import rain_icon from './Assets/rain.png';
import snow_icon from './Assets/snow.png';
import wind_icon from './Assets/wind.png';
const WeatherApp = () => {
  let api_key ="c04acb90b8ceeeb0e6f333f2f52d7707";
  const [wicon,setwicon] = useState(cloud_icon);
  const search =async () =>{
   const element = document.getElementsByClassName("cityname"); 
   if(element[0].value===""){
    return 0;
   }
   let url =`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=metric&appid=${api_key}`;
   let response = await fetch(url);
   let data =  await response.json();

   const humidity = document.getElementsByClassName("humidity-percentage");
   const temprature = document.getElementsByClassName("weather-temp");
   const wind = document.getElementsByClassName("wind-speed");
   const location = document.getElementsByClassName("wearther-location");
   humidity[0].innerHTML = Math.floor(data.main.humidity)+"%";
   temprature[0].innerHTML= Math.floor(data.main.temp)+"°C";
   wind[0].innerHTML = data.wind.speed+"km/h";
   location[0].innerHTML= data.name;

   if(data.weather[0].icon==="01d" ||data.weather[0].icon==="01n"){
    setwicon(clear_icon);
   }
   else if(data.weather[0].icon==="02d" ||data.weather[0].icon==="02n"){
    setwicon(cloud_icon);
   }
   else if(data.weather[0].icon==="03d" ||data.weather[0].icon==="03n"){
    setwicon(drizzle_icon);
   }
   else if(data.weather[0].icon==="04d" ||data.weather[0].icon==="04n"){
    setwicon(drizzle_icon);
   }
   else if(data.weather[0].icon==="09d" ||data.weather[0].icon==="09n"){
    setwicon(rain_icon);
   }
   else if(data.weather[0].icon==="10d" ||data.weather[0].icon==="10n"){
    setwicon(rain_icon);
   }
   else if(data.weather[0].icon==="13d" ||data.weather[0].icon==="13n"){
    setwicon(snow_icon);
   }
   else{
    setwicon(clear_icon);
   }

  }
  return (
    <div className="background">
    <div className='container'>
      <div className='top-bar'>
        <input type='text' className='cityname' placeholder='search'></input>
        <div className='search-icon' onClick={()=>{search()}}>
        <img src={search_icon} alt=""></img>
       </div>
      </div>
      <div className="weather-image">
      <img src={wicon} alt="" />
      </div>
        <div className='weather-temp'>24°C</div>
      <div className="wearther-location">London </div>
       <div className="data-container">
         <div className="element">
                   <img src={humidity_icon} alt="" className="icon" />
           <div className="data">
                 <div className="humidity-percentage">64%</div>
                 <div className="text">Humidity</div>
           </div>
          </div>
          <div className="element">
                   <img src={wind_icon} alt="" className="icon" />
           <div className="data">
                 <div className="wind-speed">14km/h</div>
                 <div className="text">Wind</div>
           </div>
          </div>
       </div>
    </div>
    </div>
  );
};

export default WeatherApp;
