// Core
import React from 'react';

function WeatherPerDay(props) {
  const { item } = props;

  return (
    <div className="weather-info">
      <p>Date: {new Date(item.dt_txt).toDateString()}</p>
      <p>Average Temp: {item.main.temp}°</p>
      <p>Feels Like: {item.main.feels_like}°</p>
      <p>Wind Speed: {item.wind.speed} m/s</p>
    </div>
  )
}

export default WeatherPerDay;
