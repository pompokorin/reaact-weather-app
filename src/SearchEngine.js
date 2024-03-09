import React from "react";

export default function SearchEngine() {
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
    </div>
  );
}
