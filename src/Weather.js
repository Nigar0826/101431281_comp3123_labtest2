import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherDisplay from "./WeatherDisplay";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("Toronto");
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchWeather = async () => {
      if (city.trim() === "") {
        setError("City name cannot be empty.");
        setWeather(null); 
        return;
      }

      try {
        const response = await axios.get(
          `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
        );
        setWeather(response.data);
        setError(null); 
      } catch (error) {
        setWeather(null); 
        setError("Unable to fetch weather data. Please check the city name."); 
      }
    };

    fetchWeather();
  }, [city]);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div>
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={handleCityChange}
      />
      {error && <p style={{ color: "red" }}>{error}</p>} {/* Display error messages */}
      <WeatherDisplay weather={weather} />
    </div>
  );
};

export default Weather;
