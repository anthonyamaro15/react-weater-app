import React from "react";
import { convertTimes, getDate } from "./HelperFunctions";

const Display = ({ data, time }) => {
  const showSunrise = convertTimes(data.sunrise);
  const showSunset = convertTimes(data.sunset);
  const gettingDate = getDate();
  return (
    <div className="info-container">
      <div className="top-left">
        <div className="main-location">
          <p>{data.name}</p>
        </div>
        <div className="bottom-left">
          <div className="date-info">
            <span className="time">{`${time}`}</span>
            <span className="date">{`${gettingDate}`}</span>
          </div>
          <div className="main-temp">
            <span>{`${data.temp}°`}</span>
          </div>
        </div>
      </div>

      <div className="top-right">
        <div className="icon-container">
          <img
            alt="weather icon"
            className="icon"
            src={`http://openweathermap.org/img/w/${data.icon}.png`}
          />
          <span className="icon-des">{data.description}</span>
        </div>
        <div className="description">
          <div className="location border flex">
            <p>location</p>
            <span>{data.name}</span>
          </div>
          <div className="temperature border flex">
            <p>temperature</p>
            <span>{`${data.temp}°`}</span>
          </div>
          <div className="humidity border flex">
            <p>humidity</p>
            <span>{`${data.humidity}%`}</span>
          </div>
          <div className="wind-speed border flex">
            <p>wind speed</p>
            <span>{`${data.speed} mph`}</span>
          </div>
          <div className="sunrise flex">
            <p>sunrise</p>
            <span>{`${showSunrise}`}</span>
          </div>
          <div className="sunset border flex">
            <p>sunset</p>
            <span>{`${showSunset}`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Display;
