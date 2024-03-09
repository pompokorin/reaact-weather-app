import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo row justify-content-evenly">
      <div className="DateTime text-center p-4">
        <FormattedDate date={props.data.date} />
      </div>
      <div class="col-4 quick">
        <ul class="list-unstyled">
          <li id="current-city">
            <i class="fa-solid fa-location-dot place"></i> {props.data.city}
          </li>
          <li>
            <span id="current-temp">
              {Math.round(props.data.temperature)}°C
            </span>
          </li>
          <li id="description">{props.data.description}</li>
        </ul>
      </div>

      <div class="col-4 detail">
        <ul class="list-unstyled">
          <li>
            Feels like:{" "}
            <span id="feels-like">
              {Math.round(props.data.actualTemperature)}
            </span>
            °C
          </li>
          <li>
            Wind: <span id="wind">{props.data.wind}</span> km/h
          </li>
          <li>
            Humidity: <span id="humidity">{props.data.humidity}</span>%
          </li>
          <li>
            Pressure: <span id="pressure">{props.data.pressure}</span> hPa
          </li>
        </ul>
      </div>
    </div>
  );
}
