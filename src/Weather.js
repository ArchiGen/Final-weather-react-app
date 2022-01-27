import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Where?"
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>City City</h1>
      <ul>
        <li>Wenesday 10:00</li>
        <li>Mostly Cloudly</li>
      </ul>

      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/snow.png"
            alt="snow icon"
          />
          <span className="temperature">6</span>{" "}
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Percipitation: 14%</li>
            <li>Humidity: 72%</li>
            <li>Wind: 5m/s</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
