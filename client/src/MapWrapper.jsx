import React, { useRef, useState } from "react";
import { Wrapper } from "@googlemaps/react-wrapper";

function Map({ image, dishName }) {
  const ref = useRef(null);
  const [map, setMap] = useState();

  React.useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }
  }, [ref, map]);
  // debugger;

  // get image, dish name, amd location info. Send to backend with user token.

  return <div ref={ref} />;
}

export function MapWrapper() {
  return (
    <Wrapper apiKey={"YOUR_API_KEY"}>
      <Map />
    </Wrapper>
  );
}
