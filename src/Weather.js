import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      actualTemperature: response.data.temperature.feels_like,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      pressure: response.data.temperature.pressure,
      date: new Date(response.data.time * 1000),
      icon: response.data.condition.icon,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "040ffb19o36e1562a0f417abf724b2t9";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row justify-content-center">
            <div className="col-6">
              <input
                type="search"
                className="form-control shadow-sm"
                placeholder="Type a city..."
                autofocus="on"
                autocomplete="off"
                onChange={handleCityChange}
              />
            </div>
            <div class="col-2 p-0">
              <button type="submit" className="searchButton" id="search-button">
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
            <div class="col-2 p-0">
              <button
                type=" submit"
                className="currentButton"
                id="current-button"
              >
                Current
              </button>
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
