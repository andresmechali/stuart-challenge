import React, { FunctionComponent, useContext, useEffect } from "react";

import { Store } from "../store";
import { hideToaster } from "../actions";

/**
 * Small toaster that appears on the top right of the screen
 * Disappears when clicked, or after 5 seconds
 */
const Toaster: FunctionComponent = () => {
  const { state, dispatch } = useContext(Store);
  const { showToaster } = state;

  useEffect(() => {
    setTimeout(() => {
      dispatch(hideToaster());
    }, 5000);
  }, [showToaster]);

  if (!showToaster) {
    return null;
  }

  return (
    <div
      className="toaster"
      role="presentation"
      onClick={() => dispatch(hideToaster())}
    >
      Job has been created successfully!
    </div>
  );
};

export default Toaster;
