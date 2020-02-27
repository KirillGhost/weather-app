// Core
import React from 'react';

function CurrentWeather(props) {
  const { item } = props;

  return (
    <div className="weather-info">
      <p>Date: {new Date().toDateString()}</p>
      <p>Current Temp: {item.main.temp}°</p>
      <p>Min Temp: {item.main.temp_min}°</p>
      <p>Max Temp: {item.main.temp_max}°</p>
      <p>Feels Like: {item.main.feels_like}°</p>
      <p>Wind Speed: {item.wind.speed} m/s</p>
    </div>
  )
}

export default CurrentWeather;