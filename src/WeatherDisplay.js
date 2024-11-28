import React from "react";

const WeatherDisplay = ({ weather }) => {
  if (!weather) {
    return <p>No weather data available. Please try again.</p>; // Gracefully handle null
  }

  return (
    <div className="weather-details">
      <h2>{weather.name}</h2>
      <p>
        <strong>Temperature:</strong>{" "}
        {(weather.main.temp - 273.15).toFixed(2)}°C
      </p>
      <p>
        <strong>Condition:</strong> {weather.weather[0].description}
      </p>
      <p>
        <strong>Humidity:</strong> {weather.main.humidity}%
      </p>
      <p>
        <strong>Wind Speed:</strong> {weather.wind.speed} m/s
      </p>
      <img
        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="weather icon"
      />
    </div>
  );
};

export default WeatherDisplay;
