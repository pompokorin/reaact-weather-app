import React from "react";

export default function Weather() {
  return (
    <div className="SearchCity">
      <form id="search">
        <div className="row justify-content-center">
          <div className="col-6">
            <input
              type="text"
              className="search form-control shadow-sm"
              placeholder="Type a city..."
              autofocus="on"
              autocomplete="off"
              id="search-input"
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

      <div class="row justify-content-evenly combinedReport">
        <div class="col-4 quick">
          <ul class="list-unstyled">
            <li id="current-city">
              <i class="fa-solid fa-location-dot place"></i> Sydney
            </li>
            <li>
              <span id="current-temp">21°C</span>
            </li>
            <li id="description">Broken Clouds</li>
          </ul>
        </div>

        <div class="col-4 detail">
          <ul class="list-unstyled">
            <li>
              Feels like: <span id="feels-like">21</span>°C
            </li>
            <li>
              Wind: <span id="wind">7</span> km/h
            </li>
            <li>
              Humidity: <span id="humidity">66</span>%
            </li>
            <li>
              Pressure: <span id="pressure">1022</span> hPa
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
