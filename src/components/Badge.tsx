import React, { FunctionComponent } from "react";

import dropOffBadgeBlank from "../assets/dropOffBadgeBlank.svg";
import dropOffBadgeError from "../assets/dropOffBadgeError.svg";
import dropOffBadgePresent from "../assets/dropOffBadgePresent.svg";
import pickUpBadgeBlank from "../assets/pickUpBadgeBlank.svg";
import pickUpBadgeError from "../assets/pickUpBadgeError.svg";
import pickUpBadgePresent from "../assets/pickUpBadgePresent.svg";

interface BadgeProps {
  type: "pickup" | "dropoff";
  variant: "blank" | "error" | "present";
}

const Badge: FunctionComponent<BadgeProps> = ({ type, variant }) => {
  return <img src={dropOffBadgeBlank} alt="badge" />;
};

export default Badge;
