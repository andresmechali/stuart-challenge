import React, { FunctionComponent } from "react";

import dropOffMarker from "../assets/dropOffMarker.svg";
import pickUpMarker from "../assets/pickUpMarker.svg";

interface DropOffBadgeProps {
  lat: number;
  lng: number;
  type: "pickup" | "dropoff";
}

const Marker: FunctionComponent<DropOffBadgeProps> = () => {
  return <img src={dropOffMarker} alt="marker" className="marker" />;
};

export default Marker;
