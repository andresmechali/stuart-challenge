import React, { FunctionComponent } from "react";

import pickUpMarker from "assets/img/pickUpMarker.svg";
import dropOffMarker from "assets/img/dropOffMarker.svg";
import { AddressType } from "types";

export type MarkerProps = {
  lat: number;
  lng: number;
  type: AddressType;
};

const Marker: FunctionComponent<MarkerProps> = ({ type }) => (
  <img
    src={type === "pickup" ? pickUpMarker : dropOffMarker}
    alt={`${type} marker`}
    className="marker"
  />
);

export default Marker;
