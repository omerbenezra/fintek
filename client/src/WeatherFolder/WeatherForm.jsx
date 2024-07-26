import React, { useState } from "react";

const WeatherForm = ({ onSubmit }) => {
  const textStyle = {
    fontFamily: "Heebo, sans-serif",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: "30px",
    lineHeight: "44px",
  };
  const [city, setCity] = useState("");

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(city);
  };

  return (
    <div className="form-container">
      <div className="text">
        <span style={textStyle}>Use our weather app </span>
        <span style={textStyle}>to see the weather</span>
        <span style={textStyle}>around the world</span>
      </div>
      <div className="inputLabel">
        <span> city name</span>
      </div>
      <div className="input-wrapper">
        <input
          type="text"
          value={city}
          onChange={handleInputChange}
          placeholder="Enter city"
          className="input-field"
        />
        <button
          type="submit"
          className="submit-button"
          onClick={handleFormSubmit}
        >
          Check
        </button>
      </div>
    </div>
  );
};

export default WeatherForm;
