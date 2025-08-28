import React, { useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import "./advancemap.css";

const containerStyle = {
  width: "90%",
  height: "600px",
  margin: "0 auto",
};

const center = {
  lat: 28.480998849569467,
  lng: -81.30726034319346,
};

const AdvanceMap = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY_MAP,
  });

  const [location] = useState(center);

  const businessLink = "https://maps.app.goo.gl/PXH87qQesxWAWqbKA";

  return isLoaded ? (
    <div className="map-container">
      <div className="map-link">
        <a href={businessLink} target="_blank" rel="noopener noreferrer">
          Click here to view Advance Coin Laundry in Google Maps
        </a>
      </div>
      <GoogleMap mapContainerStyle={containerStyle} center={location} zoom={12}>
        <Marker position={location} />
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
};

export default React.memo(AdvanceMap);
