import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });

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
    });
  }

  if (weatherData.ready) {
    return (
      <div class="row justify-content-evenly combinedReport">
        <div className="DateTime text-center p-4">
          <FormattedDate date={weatherData.date} />
        </div>
        <div class="col-4 quick">
          <ul class="list-unstyled">
            <li id="current-city">
              <i class="fa-solid fa-location-dot place"></i> {weatherData.city}
            </li>
            <li>
              <span id="current-temp">
                {Math.round(weatherData.temperature)}°C
              </span>
            </li>
            <li id="description">{weatherData.description}</li>
          </ul>
        </div>

        <div class="col-4 detail">
          <ul class="list-unstyled">
            <li>
              Feels like:{" "}
              <span id="feels-like">
                {Math.round(weatherData.actualTemperature)}
              </span>
              °C
            </li>
            <li>
              Wind: <span id="wind">{weatherData.wind}</span> km/h
            </li>
            <li>
              Humidity: <span id="humidity">{weatherData.humidity}</span>%
            </li>
            <li>
              Pressure: <span id="pressure">{weatherData.pressure}</span> hPa
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    const apiKey = "040ffb19o36e1562a0f417abf724b2t9";
    let city = "Sydney";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
}
