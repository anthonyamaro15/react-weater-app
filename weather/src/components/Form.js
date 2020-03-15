import React from "react";

const Form = ({ handleChange, handleSubmit, value }) => {
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
