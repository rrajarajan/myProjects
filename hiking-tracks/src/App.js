import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  LoadScript,
  DirectionsRenderer,
} from "@react-google-maps/api";
import data from './mock-api-endpoint.json';

const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const App = () => {
  const [mapCenter, setMapCenter] = useState({ lat: -37.81238074495941, lng: 144.962292596677 }); // Default to Melbourne
  const [places, setPlaces] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [filter, setFilter] = useState("hiking");
  const [directions, setDirections] = useState(null);

  const mapContainerStyle = {
    width: "100vw",
    height: "100vh",
  };

  // Fetch places (Mock API)
  const fetchPlaces = () => {
    try {
      setPlaces(data);
    } catch (error) {
      console.error("Error fetching places:", error);
    }
  };

  useEffect(() => {
    fetchPlaces();
  }, []);

  const filteredPlaces = places.filter((place) =>
    filter === "all" ? true : place.type === filter
  );

  // Fetch hiking trail directions
  const fetchDirections = async (place) => {
    const origin = { lat: -37.8136, lng: 144.9631 }; // Example starting point
    const destination = { lat: place.latitude, lng: place.longitude };

    const directionsService = new window.google.maps.DirectionsService();

    directionsService.route(
      {
        origin,
        destination,
        travelMode: window.google.maps.TravelMode.WALKING, // Use WALKING for hiking
      },
      (result, status) => {
        if (status === "OK") {
          setDirections(result);
        } else {
          console.error("Error fetching directions:", status);
        }
      }
    );
  };

  const handleMarkerClick = (place) => {
    setSelectedPlace(place);

    if (place.type === "hiking") {
      fetchDirections(place); // Fetch directions for hiking
    } else {
      setDirections(null); // Clear directions for non-hiking places
    }
  };

  return (
    <LoadScript googleMapsApiKey={API_KEY}>
      <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        <header style={{ padding: "1rem", background: "#333", color: "#fff" }}>
          <h1>Explore Outdoor Adventures</h1>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            style={{ marginLeft: "1rem", padding: "0.5rem" }}
          >
            <option value="all">All</option>
            <option value="hiking">Hiking Tracks</option>
            <option value="bicycle">Bicycle Routes</option>
            <option value="camping">Camping Sites</option>
            <option value="waterfalls">Waterfalls</option>
          </select>
        </header>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={7}
          center={mapCenter}
        >
          {/* Render Markers */}
          {filteredPlaces.map((place) => (
            <Marker
              key={place.id}
              position={{ lat: place.latitude, lng: place.longitude }}
              onClick={() => handleMarkerClick(place)}
            />
          ))}

          {/* Render InfoWindow */}
          {selectedPlace && (
            <InfoWindow
              position={{
                lat: selectedPlace.latitude,
                lng: selectedPlace.longitude,
              }}
              onCloseClick={() => setSelectedPlace(null)}
            >
              <div>
                <h2>{selectedPlace.name}</h2>
                <p>{selectedPlace.description}</p>
              </div>
            </InfoWindow>
          )}

          {/* Render Hiking Trail Directions */}
          {directions && <DirectionsRenderer directions={directions} />}
        </GoogleMap>
      </div>
    </LoadScript>
  );
};

export default App;
