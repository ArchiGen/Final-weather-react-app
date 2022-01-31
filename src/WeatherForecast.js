import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = "8faec0e45e93e61e880c60b71662661c";
  let lon = props.coords.lon;
  let lat = props.coords.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

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
