import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <ul>
        <li className="ForecastDay">{day()}</li>
        <li>
          <WeatherIcon code={props.data.weather[0].icon} alt="icon temp" />
        </li>
        <li className="ForecastTemp">
          <span className="Max">{maxTemp()}/</span>
          <span className="Min">{minTemp()}</span>
        </li>
      </ul>{" "}
    </div>
  );
}