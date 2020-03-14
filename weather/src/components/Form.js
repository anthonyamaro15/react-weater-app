import React, { useState, useEffect } from "react";
import axios from "axios";

// constructor() {
//    this.key = "eb293611b49b059d8a3390adbe3d3d08";
// }

// async getData(city) {
//    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${this.key}&units=imperial`;

//    const fetchUrl = await fetch(url);
//    const getJsonData = await fetchUrl.json();
//    return getJsonData;
// }

const apiKey = "eb293611b49b059d8a3390adbe3d3d08";

const Form = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    async function getData() {
      const axiosData = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=arizona&APPID=${apiKey}&units=imperial`
      );
      setData(axiosData.data);
    }

    getData();
  }, [value]);
  //   console.log(data);
  const handleChange = e => {
    const val = ([e.target.name] = e.target.value);
    setValue(val);
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} data={data}>
      <input
        type="text"
        placeholder="search city"
        onChange={handleChange}
        name="value"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Form;
