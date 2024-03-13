import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import TemperatureConversion from "./TemperatureConversion";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo row justify-content-evenly">
      <div className="DateTime text-center p-4">
        <FormattedDate date={props.data.date} />
      </div>
      <div className="col-4 quick">
        <ul className="list-unstyled">
          <li id="current-city">
            <i className="fa-solid fa-location-dot place"></i> {props.data.city}
          </li>
          <li>
            <span>
              <WeatherIcon code={props.data.icon} />
            </span>
            <span>
              <TemperatureConversion celsius={props.data.temperature} />
            </span>
          </li>
          <li id="description">{props.data.description}</li>
        </ul>
      </div>

      <div className="col-4 detail">
        <ul className="list-unstyled">
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
