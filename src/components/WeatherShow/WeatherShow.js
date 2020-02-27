// Core
import React, { Component } from 'react';
import axios from 'axios';
import CurrentWeather from '../CurrentWeather/CurrentWeather';
import WeatherPerDay from '../WeatherPerDay/WeatherPerDay';
import { URL, FORECAST_URL, ICON_URL } from '../../constants/index';
// Styles
import './WeatherShow.css';

class WeatherShow extends Component {
  constructor() {
    super();
    this.state = {
      weatherData: null,
      forecastData: null,
      currentWeather: true
    };
    this.toggleWeatherClick = this.toggleWeatherClick.bind(this);
  }

  componentDidMount() {
    this.getCurrentWeather();
    this.getForecast();
  }

  toggleWeatherClick(e) {
    this.setState(state => ({
      currentWeather: !state.currentWeather
    }));
    this.state.currentWeather ? e.target.innerHTML="Current Weather" : e.target.innerHTML="5 Day Forecast"
  }  

  getCurrentWeather() {
    axios.get(URL).then(json => {
      this.setState({ weatherData: json.data });
    });
  }

  getForecast() {
    axios.get(FORECAST_URL).then(json => {
      this.setState({ forecastData: json.data });
    });
  }

  render() {
    const weatherData = this.state.weatherData;
    const forecastData = this.state.forecastData;

    if ((!weatherData) || (!forecastData)) return <div className="preload-text">Loading...</div>;
    const weather = weatherData.weather[0];
    let forecast = [];
    const icon = ICON_URL + weather.icon + ".png";

    for (let i=0; i<forecastData.list.length; i+=8) {
      forecast.push(forecastData.list[i]);
    }

    return (
      <div className="weather-form">
        <div className="weather-menu">
          <button className="toggle-weather" onClick={this.toggleWeatherClick}>5 Day Forecast</button>
        </div>              
        <div className="weather-block">
          <h1 className="weather-header">
            {weather.main} in {weatherData.name}
            <img src={icon} alt={weatherData.description} />
          </h1>

          {this.state.currentWeather ? (
            <CurrentWeather item={weatherData} />
          ) : (
            forecast.map((item, i) =>
              <WeatherPerDay key={i} item={item} />
          ))}
        </div>
      </div>
    )
  }
}

export default WeatherShow;
