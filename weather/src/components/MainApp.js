import React, { useState, useEffect } from "react";
import Form from "./Form";
import Display from "./Display";
import axios from "axios";

const MainApp = () => {
  const [data, setData] = useState({});
  const [value, setValue] = useState("");
  const [withData, setWithData] = useState(false);
  const [result, setResult] = useState("las vegas");
  const apiKey = "eb293611b49b059d8a3390adbe3d3d08";

  useEffect(() => {
    async function getData(city) {
      try {
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
      } catch (error) {
        console.log(error.message);
        alert("city not found");
      }
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

  //   const getCurrTime = () => {
  //     let time = new Date().toLocaleTimeString();
  //     let arr = time.split(" ");
  //     console.log(arr);
  //   };
  //   getCurrTime();

  return (
    <div className="body">
      {withData ? (
        <div className="container">
          <Form
            handleChange={handleChange}
            handleSubmi={handleSubmit}
            value={value}
          />
          <Display data={data} />
        </div>
      ) : (
        <h1 className="loading">Loading...</h1>
      )}
    </div>
  );
};

export default MainApp;
