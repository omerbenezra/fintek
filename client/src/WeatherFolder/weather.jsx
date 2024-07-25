import React, { useState } from "react";
import axios from "axios";
import WeatherForm from "./WeatherForm";
import WeatherDisplay from "./WeatherDisplay";
import "./weather.css"; // Import the CSS file

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  const handleFormSubmit = async (city) => {
    setError("");
    setWeatherData(null);

    try {
      const response = await axios.get("http://localhost:3000/weather", {
        params: { city },
      });
      setWeatherData(response.data);
    } catch (err) {
      setError("Failed to fetch weather data");
      console.error(err);
    }
  };

  return (
    <>
      <img
        src="https://static.wixstatic.com/media/348bae_e720e7f021484661ad942468da4e7f46~mv2.png"
        alt="o"
        className="form-image"
      />
      <div className="app-container">
        <div className="left-container">
          <WeatherForm onSubmit={handleFormSubmit} />
        </div>
        <div className="right-container">
          <WeatherDisplay weatherData={weatherData} error={error} />
        </div>
      </div>
    </>
  );
};

export default Weather;
