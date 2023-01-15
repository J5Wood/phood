import React, { useEffect } from "react";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import { useMap } from "react-leaflet";

export function SearchField() {
  const searchControl = new GeoSearchControl({
    provider: new OpenStreetMapProvider(),
    style: "bar",
  });

  const map = useMap();

  useEffect(() => {
    map.addControl(searchControl);
    return () => map.removeControl(searchControl);
  }, []);
}
