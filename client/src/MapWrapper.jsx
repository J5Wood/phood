import React from "react";
import { SearchField } from "./SearchField";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../node_modules/leaflet-geosearch/dist/geosearch.css";

// get image, dish name, amd location info. Send to backend with user token.

export function MapWrapper() {
  return (
    <>
      <MapContainer
        className="map"
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <SearchField />
      </MapContainer>
    </>
  );
}
