import React, { useEffect } from "react";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import { useMap } from "react-leaflet";

export function SearchField({ setLocation }) {
  const searchControl = new GeoSearchControl({
    provider: new OpenStreetMapProvider(),
    style: "bar",
    searchLabel: "Enter Restaurant Name",
    showPopup: true,
    popupFormat: ({ result }) => `${result.label}`,
  });

  const map = useMap();

  function handleInputChange(e) {
    setLocation(e.target.value);
  }

  useEffect(() => {
    map.addControl(searchControl);
    const input = document.querySelector(".glass");
    input.addEventListener("change", (e) => handleInputChange(e));
    return () => map.removeControl(searchControl);
  }, []);
}
