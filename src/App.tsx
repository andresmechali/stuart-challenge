import React, { useState } from "react";

import "./styles.scss";

import Map from "./components/Map";
import Search from "./components/Search";

import { Address } from "./types";
import { StoreProvider } from "./store";

const initialAddress: Address = {
  searched: false,
  found: false,
  text: "",
};

const App = () => {
  const [pickUpAddress, setPickUpAddress] = useState<Address>(initialAddress);
  const [dropOffAddress, setDropOffAddress] = useState<Address>(initialAddress);

  return (
    <StoreProvider>
      <Map
        pickUpMarker={pickUpAddress.marker}
        dropOffMarker={dropOffAddress.marker}
      />
      <Search
        pickUpAddress={pickUpAddress}
        setPickUpAddress={setPickUpAddress}
        dropOffAddress={dropOffAddress}
        setDropOffAddress={setDropOffAddress}
      />
    </StoreProvider>
  );
};

export default App;
