import React from "react";

const WeatherDisplay = ({ weatherData, error }) => {
  return (
    <div className="right-container">
      <div className="inner-container">
        {error && <p>{error}</p>}
        {weatherData && (
          <div className="weather-info">
            <p className="city-name">{weatherData.location.name}</p>
            <p className="country">{weatherData.location.country}</p>
            <p className="date-time">
              {new Date(weatherData.location.localtime).toLocaleDateString("en-GB")} at{" "}
              {new Date(weatherData.location.localtime).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
              })}
            </p>
            <span className="temp">
             <p> {weatherData.current.temp_c.toFixed(0)} °</p>
            </span>
            
            <p className="condition">{weatherData.current.condition.text}</p>
            <div className="additional-info">
              <div className="info-item">
                <p>Precipitation</p>
                <p>{weatherData.current.precip_mm.toFixed(2)} mm</p>
              </div>
              <div className="info-item">
                <p>Humidity</p>
                <p>{weatherData.current.humidity}%</p>
              </div>
              <div className="info-item">
                <p>Wind</p>
                <p>{weatherData.current.wind_kph.toFixed(2)} km/h</p>
              </div>
            </div>

            <div className="hourly-forecast">
              {weatherData.forecast?.forecastday?.[0]?.hour
                ?.slice(new Date().getHours(), new Date().getHours() + 5)
                .map((hour, index) => (
                  <div key={index} className="hourly-item">
                    <p>
                      {new Date(hour.time).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: false,
                      })}
                    </p>
                    <p>{hour.temp_c.toFixed(0)}°</p>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherDisplay;
