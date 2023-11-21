import React, { useState } from 'react';
import axios from 'axios';

const WeatherApp = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const apiKey = '5c6c50a2128640b6bfb194857232111';

  const fetchWeather = async () => {
    try {
      const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=chicoutimi&lang=fr`);
      setWeatherData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des données météo", error);
    }
  };

  React.useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <div>
      {weatherData && (
        <div>
          <h3>Météo à {weatherData.location.name}</h3>
          <p>Température: {weatherData.current.temp_c} °C</p>
          <p>Condition: {weatherData.current.condition.text}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
