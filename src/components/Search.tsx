import React, { FunctionComponent, useContext } from "react";

import Badge from "components/Badge";

import { getGeoCode } from "api/endpoints";

import { AddressType } from "../types";

import { setAddress, setError, setMarker, Store } from "../store";

const Search: FunctionComponent = () => {
  const { state, dispatch } = useContext(Store);
  const { pickup, dropoff } = state;

  const getCode = (addressType: AddressType, address: string) => {
    getGeoCode(address).then((res) => {
      if (res.address) {
        dispatch(setMarker(addressType, res.latitude, res.longitude));
      } else {
        dispatch(setError(addressType));
      }
    });
  };

  return (
    <div className="search-container">
      <div className="flex-row">
        <Badge addressType="pickup" />
        <input
          type="text"
          className="input-box"
          value={pickup.text}
          placeholder="Pick up address"
          onChange={(e) => {
            dispatch(setAddress("pickup", e.target.value));
          }}
          onBlur={() => getCode("pickup", pickup.text)}
        />
      </div>
      <div className="flex-row">
        <Badge addressType="dropoff" />
        <input
          type="text"
          className="input-box"
          value={dropoff.text}
          placeholder="Drop off address"
          onChange={(e) => {
            dispatch(setAddress("dropoff", e.target.value));
          }}
          onBlur={() => getCode("dropoff", dropoff.text)}
        />
      </div>
      <div className="flex-row">
        <button
          className="button"
          type="button"
          onClick={() => {
            console.log("submit");
          }}
        >
          Create job
        </button>
      </div>
    </div>
  );
};

export default Search;
