import React, { FunctionComponent, useContext } from "react";
import GoogleMapReact from "google-map-react";

import Marker from "components/Marker";

import { Store } from "../store";

// Default values
const DEFAULT_CENTER = { lat: 48.86982, lng: 2.334579 }; // Paris
const DEFAULT_ZOOM = 14;

/**
 * Renders a Google map using "google-map-react"
 * The map covers the whole screen, and doesn't display controls
 * If pickup or dropoff have geocodes assigned, it displays the
 * corresponding markers in the given position.
 */
const Map: FunctionComponent = () => {
  const { state } = useContext(Store);
  const { pickup, dropoff } = state;

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCCWmW5w-5iuKcWc_YlnBCSmfB3UHNLnLE" }}
        defaultCenter={DEFAULT_CENTER}
        defaultZoom={DEFAULT_ZOOM}
        options={{
          disableDefaultUI: true, // Hide controls
        }}
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
