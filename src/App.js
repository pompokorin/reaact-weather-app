import React from "react";
import Weather from "./Weather";
import SearchEngine from "./SearchEngine";
import "./index.css";

export default function App() {
  return (
    <div className="App text-center">
      <SearchEngine />
      <Weather />
    </div>
  );
}
