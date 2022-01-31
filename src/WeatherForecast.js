import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col-2">
          <ul>
            <li className="ForecastDay">Tue</li>
            <li>
              <WeatherIcon code="01d" alt="icon temp" />
            </li>
            <li className="ForecastTemp">
              <span className="Max">19/</span>
              <span className="Min">10</span>
            </li>
          </ul>{" "}
        </div>
      </div>
    </div>
  );
}
