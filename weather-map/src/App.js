import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import axios from "axios";

const GOOGLE_MAPS_API_KEY = "AIzaSyASpCwy09zTNDCyrlKnsvoYbK3CPex_skM";
const WEATHER_API_KEY = "17e9d6262dae00e601ccdce70ee7c077";

const App = () => {
  const [mapCenter, setMapCenter] = useState({ lat: 37.7749, lng: -122.4194 }); // Default to San Francisco
  const [markers, setMarkers] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);

  const handleMapClick = async (event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();

    try {
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${WEATHER_API_KEY}&units=metric`
      );
      const weatherData = weatherResponse.data;

      setMarkers((prev) => [
        ...prev,
        { lat, lng, weather: weatherData },
      ]);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "100vh" }}
        zoom={5}
        center={mapCenter}
        onClick={handleMapClick}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={{ lat: marker.lat, lng: marker.lng }}
            onClick={() => setSelectedMarker(marker)}
          />
        ))}

        {selectedMarker && (
          <InfoWindow
            position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
            onCloseClick={() => setSelectedMarker(null)}
          >
            <div>
              <h3>{selectedMarker.weather.name}</h3>
              <p>Temperature: {selectedMarker.weather.main.temp} °C</p>
              <p>Condition: {selectedMarker.weather.weather[0].description}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default App;
