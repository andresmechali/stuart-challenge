import React, { FunctionComponent } from "react";

import { AddressType } from "types";
import pickUpMarker from "../assets/img/pickUpMarker.svg";
import dropOffMarker from "../assets/img/dropOffMarker.svg";

export type MarkerProps = {
  lat: number;
  lng: number;
  type: AddressType;
};

/**
 * Marker to display pickup or dropoff location in the map
 * @param type
 */
const Marker: FunctionComponent<MarkerProps> = ({ type }) => (
  <img
    src={type === "pickup" ? pickUpMarker : dropOffMarker}
    alt={`${type} marker`}
    className="marker"
  />
);

export default Marker;
