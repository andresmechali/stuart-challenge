import React, { FunctionComponent, useContext, useEffect } from "react";
import GoogleMapReact from "google-map-react";

import Marker from "./Marker";

import { Store } from "../store";

const DEFAULT_CENTER = { lat: 48.86982, lng: 2.334579 };
const DEFAULT_ZOOM = 14;

// 29 rue du 4 septembre
// 15 rue de bourgogne
const Map: FunctionComponent = () => {
  const { state } = useContext(Store);
  const { pickup, dropoff } = state;
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCCWmW5w-5iuKcWc_YlnBCSmfB3UHNLnLE" }}
        defaultCenter={DEFAULT_CENTER}
        defaultZoom={DEFAULT_ZOOM}
      >
        {pickup && pickup.marker && (
          <Marker
            lat={pickup.marker.lat}
            lng={pickup.marker.lng}
            type="pickup"
          />
        )}
        {dropoff && dropoff.marker && (
          <Marker
            lat={dropoff.marker.lat}
            lng={dropoff.marker.lng}
            type="dropoff"
          />
        )}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
