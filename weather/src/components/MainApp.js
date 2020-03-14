import React, { useState, useEffect } from "react";
// import Form from "./Form";
import axios from "axios";

const apiKey = "eb293611b49b059d8a3390adbe3d3d08";

const MainApp = () => {
  const [data, setData] = useState({});
  const [value, setValue] = useState("");
  const [withData, setWithData] = useState(false);
  const [result, setResult] = useState("las vegas");

  useEffect(() => {
    async function getData(city) {
      const axiosData = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=imperial`
      );
      const { name, weather, main, wind, sys, timezone } = axiosData.data;
      const { main: mainW, description, icon } = weather[0];
      const { temp, humidity } = main;
      const { speed } = wind;
      const { sunrise, sunset } = sys;
      const obj = {
        name,
        timezone,
        mainW,
        description,
        icon,
        temp,
        humidity,
        speed,
        sunrise,
        sunset
      };
      setData(obj);
      setWithData(true);
    }

    getData(result);
  }, [result]);

  const handleChange = e => {
    const val = e.target.value;
    setValue(val);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setResult(value);
    setValue("");
  };

  return (
    <div>
      {withData ? (
        <div className="container">
          <div className="form-container">
            <form onSubmit={handleSubmit} data={data}>
              <input
                type="text"
                placeholder="search city"
                onChange={handleChange}
                name="value"
                value={value}
              />
              <button type="submit">Search</button>
            </form>
          </div>

          <div className="info-container">
            <div className="top-left">
              <div className="main-location">
                <p>{data.name}</p>
              </div>
              <div className="bottom-left">
                <div className="date-info">
                  <span className="time">4: 00 pm</span>
                  <span className="date">fri mar 13 2020</span>
                </div>
                <div className="main-temp">
                  <span>{`${data.temp}`}</span>
                </div>
              </div>
            </div>

            <div className="top-right">
              <div className="icon-container">
                <span className="icon">icon</span>
                <span className="icon-des">{data.description}</span>
              </div>
              <div className="description">
                <div className="location border flex">
                  <p>location</p>
                  <span>{data.name}</span>
                </div>
                <div className="temperature border flex">
                  <p>temperature</p>
                  <span>{`${data.temp}`}</span>
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
                  <span>{`${data.sunrise}am`}</span>
                </div>
                <div className="sunset border flex">
                  <p>sunset</p>
                  <span>{`${data.sunset}pm`}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1 className="loading">Loading...</h1>
      )}
    </div>
  );
};

export default MainApp;
