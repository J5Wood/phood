import React, { useEffect, useState } from "react";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import { useMap } from "react-leaflet";
import { useMapEvents } from "react-leaflet/hooks";
import { Handler } from "leaflet";

// const form = document.querySelector('form');
// const input = form.querySelector('input[type="text"]');

// form.addEventListener('submit', async (event) => {
//   event.preventDefault();

//   const results = await provider.search({ query: input.value });
//   console.log(results); // » [{}, {}, {}, ...]
// });

export function SearchField() {
  const searchControl = new GeoSearchControl({
    provider: new OpenStreetMapProvider(),
    style: "bar",
    searchLabel: "Enter Restaurant Name",
    showPopup: true,
    popupFormat: ({ result }) => `${result.label}`,
  });

  const map = useMap();
  const [searchInput, setSearchInput] = useState("");

  function handleInputChange(e) {
    setSearchInput(e.target.value);
  }

  useEffect(() => {
    map.addControl(searchControl);
    const input = document.querySelector(".glass");
    input.addEventListener("change", (e) => handleInputChange(e));
    return () => map.removeControl(searchControl);
  }, []);
}
