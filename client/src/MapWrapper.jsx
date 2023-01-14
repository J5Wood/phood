import React, { useState } from "react";
import { SearchField } from "./SearchField";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
// import { LocationMarker } from "./LocationMarker";
// import { OpenStreetMapProvider } from "leaflet-geosearch";

// get image, dish name, amd location info. Send to backend with user token.

export function MapWrapper() {
  // const provider = new OpenStreetMapProvider();

  // const [searchInput, setSearchInput] = useState("");

  // function handleInputChange(e) {
  //   setSearchInput(e.target.value);
  //   mapSearch(e.target.value);
  // }

  // async function mapSearch(location) {
  //   const results = await provider.search({ query: location });
  //   console.log(results);
  //   // debugger;
  // }

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
      {/* <input
        type="text"
        name="searchInput"
        id="searchInput"
        value={searchInput}
        onChange={(e) => handleInputChange(e)}
      /> */}
    </>
  );
}
