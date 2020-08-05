import React, { FunctionComponent } from "react";

import "./styles.scss";

import Map from "./components/Map";
import Search from "./components/Search";

import { StoreProvider } from "./store";

const App: FunctionComponent = () => (
  <StoreProvider>
    <Map />
    <Search />
  </StoreProvider>
);

export default App;
