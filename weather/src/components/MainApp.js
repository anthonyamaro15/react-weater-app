import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Display from "./Display";
import Form from "./Form";
import axios from "axios";

const MainApp = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const dispatch = useDispatch();
  const reducer = useSelector(state => ({
    ...state
  }));
  const { loading, data, error, result, apiKey } = reducer.mainReducer;

  useEffect(() => {
    const timeID = setTimeout(() => {
      getTime();
    }, 1000);
    return () => clearTimeout(timeID);
  }, [time]);

  useEffect(() => {
    async function getData() {
      dispatch({ type: "FETCHING_DATA" });
      try {
        const axiosData = await axios.get(
          `http://api.openweathermap.org/data/2.5/weather?q=${result}&APPID=${apiKey}&units=imperial`
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

        dispatch({ type: "GOT_DATA", payload: obj });
      } catch (error) {
        console.log(error.response);
        dispatch({ type: "FETCH_ERROR", payload: error.response.data.message });
      }
    }

    getData();
  }, [result]);

  const getCity = value => {
    dispatch({ type: "GET_VALUE", payload: value });
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
    <div>
      {!error ? (
        <div className="body">
          {!loading ? (
            <div className="container">
              <Form getCity={getCity} />
              <Display data={data} time={time} />
            </div>
          ) : (
            <h1 className="loading">Loading...</h1>
          )}
        </div>
      ) : (
        <h1 className="error">{error}</h1>
      )}
    </div>
  );
};

export default MainApp;
