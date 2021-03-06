import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h2 className="text-capitalize">{props.data.city}</h2>
      <ul>
        <li>
          <FormatDate date={props.data.date} />
        </li>
        <li className="text-capitalize description">
          {props.data.description}
        </li>
      </ul>

      <div className="row">
        <div className="col-6">
          <WeatherIcon
            code={props.data.icon}
            alt={props.data.description}
            color={"#ffcc5e"}
          />
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
        <div className="col-6 extraInfo">
          <ul>
            <li>
              Humidity: <span className="bolded">{props.data.humidity}%</span>
            </li>
            <li>
              Speed:<span className="bolded"> {props.data.wind}m/s</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
