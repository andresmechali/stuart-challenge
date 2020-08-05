import React, { FunctionComponent, useContext, useMemo } from "react";

import { Address, AddressType } from "../types";
import { Store } from "../store";

import dropOffBadgeBlank from "../assets/dropOffBadgeBlank.svg";
import dropOffBadgeError from "../assets/dropOffBadgeError.svg";
import dropOffBadgePresent from "../assets/dropOffBadgePresent.svg";
import pickUpBadgeBlank from "../assets/pickUpBadgeBlank.svg";
import pickUpBadgeError from "../assets/pickUpBadgeError.svg";
import pickUpBadgePresent from "../assets/pickUpBadgePresent.svg";

interface BadgeProps {
  addressType: AddressType;
}

const Badge: FunctionComponent<BadgeProps> = ({ addressType }) => {
  const { state } = useContext(Store);
  const { pickup, dropoff } = state;

  const address: Address = addressType === "pickup" ? pickup : dropoff;

  const show = useMemo(() => {
    switch (addressType) {
      case "pickup":
        if (!address.searched) {
          return pickUpBadgeBlank;
        } else if (address.found) {
          return pickUpBadgePresent;
        } else {
          return pickUpBadgeError;
        }
      case "dropoff":
      default:
        if (!address.searched) {
          return dropOffBadgeBlank;
        } else if (address.found) {
          return dropOffBadgePresent;
        } else {
          return dropOffBadgeError;
        }
    }
  }, [address.searched, address.found]);

  return <img className="badge" src={show} alt="badge" />;
};

export default Badge;
