import React, { useState, useEffect } from "react";
import Display from "./Display";
import Form from "./Form";
import axios from "axios";

// test

const MainApp = () => {
  const [data, setData] = useState({});
  const [withData, setWithData] = useState(false);
  const [result, setResult] = useState("las vegas");
  const apiKey = "eb293611b49b059d8a3390adbe3d3d08";
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timeID = setTimeout(() => {
      getTime();
    }, 1000);
    return () => clearTimeout(timeID);
  }, [time]);

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

  const getCity = city => {
    setResult(city);
  };

  const getTime = () => {
    const time = new Date().toLocaleTimeString();
    setTime(time);
  };

  const getCurrTime = () => {
    //  let time = new Date().toLocaleTimeString();
    //  let arr = time.split("");
    //  let dayRnight = arr.slice(-2)[0];
    //  let firstIn = arr[0];
    //  console.log(firstIn);
  };
  getCurrTime();

  return (
    <div className="body">
      {withData ? (
        <div className="container">
          <Form getCity={getCity} />
          <Display data={data} time={time} />
        </div>
      ) : (
        <h1 className="loading">Loading...</h1>
      )}
    </div>
  );
};

export default MainApp;
