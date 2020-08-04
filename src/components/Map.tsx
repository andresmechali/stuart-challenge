import React, { FunctionComponent, useEffect } from "react";
import GoogleMapReact from "google-map-react";

import Marker from "./Marker";

const Map: FunctionComponent<any> = ({
  center = { lat: 41.396578, lng: 2.162695 },
  zoom = 14,
}) => {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCCWmW5w-5iuKcWc_YlnBCSmfB3UHNLnLE" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <Marker lat={59.955555} lng={30.337777} type="pickup" />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
