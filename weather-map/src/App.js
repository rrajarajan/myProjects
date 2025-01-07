// src/App.js
import React, { useState, useCallback } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import axios from "axios";

const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};

const center = {
  lat: -37.9696433, // Default to Melbourne
  lng: 144.3937694,
};

const App = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [weather, setWeather] = useState(null);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const fetchWeather = async (lat, lng) => {
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&units=metric`;
    try {
      const response = await axios.get(API_URL);
      setWeather(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const onMapClick = useCallback((event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    setSelectedLocation({ lat, lng });
    fetchWeather(lat, lng);
  }, []);

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps...</div>;

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={6}
        center={center}
        onClick={onMapClick}
      >
        {selectedLocation && <Marker position={selectedLocation} />}
      </GoogleMap>

      {weather && (
        <div style={{ position: "absolute", bottom: "10px", left: "10px", backgroundColor: "#fff", padding: "10px", borderRadius: "5px" }}>
          <h3>Weather Information</h3>
          <p>Location: {weather.name}</p>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Condition: {weather.weather[0].description}</p>
          <p>Humidity: {weather.main.humidity}%</p>
        </div>
      )}
    </div>
  );
};

export default App;
