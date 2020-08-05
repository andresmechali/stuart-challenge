import React, { FunctionComponent, useContext, useMemo } from "react";

import { Address, AddressType } from "../types";
import { Store } from "../store";

import dropOffBadgeBlank from "../assets/img/dropOffBadgeBlank.svg";
import dropOffBadgeError from "../assets/img/dropOffBadgeError.svg";
import dropOffBadgePresent from "../assets/img/dropOffBadgePresent.svg";
import pickUpBadgeBlank from "../assets/img/pickUpBadgeBlank.svg";
import pickUpBadgeError from "../assets/img/pickUpBadgeError.svg";
import pickUpBadgePresent from "../assets/img/pickUpBadgePresent.svg";

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
        }
        if (address.found) {
          return pickUpBadgePresent;
        }
        return pickUpBadgeError;
      case "dropoff":
      default:
        if (!address.searched) {
          return dropOffBadgeBlank;
        }
        if (address.found) {
          return dropOffBadgePresent;
        }
        return dropOffBadgeError;
    }
  }, [address.searched, address.found]);

  return <img className="badge" src={show} alt="badge" />;
};

export default Badge;
