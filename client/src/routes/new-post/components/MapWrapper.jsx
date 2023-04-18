import React from "react";
import { SearchField } from "./SearchField";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../../../../node_modules/leaflet-geosearch/dist/geosearch.css";
import { savePost } from "../../../actions/PostActions";

// *** Change const user to user's token, send token to backend to assign to a user
// *** Grab map data and put it into input fields. Allow user to accept or change fields.

export function MapWrapper({ image, dishName, resetImage }) {
  async function acceptPostLocation(image, dishName) {
    const location = document.querySelector(".leaflet-popup-content").innerText;
    const userId = 2;
    const resp = await savePost(image, dishName, location, userId);
    if (resp.postId) {
      window.location.href = `/posts/${resp.postId}`;
    } else {
      console.log(resp);
      // *** Handle errors
    }
  }

  return (
    <>
      <button onClick={() => resetImage(null)}>GO BACK</button>
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
      <button onClick={() => acceptPostLocation(image, dishName)}>
        ACCEPT
      </button>
    </>
  );
}
