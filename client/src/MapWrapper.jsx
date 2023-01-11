import React from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
// get image, dish name, amd location info. Send to backend with user token.

export function MapWrapper() {
  return (
    <MapContainer
      className="map"
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
