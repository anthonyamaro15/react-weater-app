import React, { useState } from "react";

const Form = ({ getCity }) => {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    getCity(value);
    setValue("");
  };

  const handleChange = e => {
    let val = ([e.target.name] = e.target.value);
    setValue(val);
  };
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
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
  );
};

export default Form;
