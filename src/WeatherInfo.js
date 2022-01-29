import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h2 className="text-capitalize">{props.data.city}</h2>
      <ul>
        <li>
          <FormatDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>

      <div className="row">
        <div className="col-6">
          <WeatherIcon code={props.data.icon} alt={props.data.description} />
          <span className="temperature">
            {Math.round(props.data.temperature)}
          </span>{" "}
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Percipitation: 14%</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Speed: {props.data.wind}m/s</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
