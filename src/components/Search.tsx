import React, {
  FunctionComponent,
  useCallback,
  useContext,
  useEffect,
} from "react";
import debounce from "lodash.debounce";

import Badge from "components/Badge";

import { getGeoCodeRequest, createJobRequest } from "api/endpoints";
import { AddressType } from "types";
import { Store } from "../store";
import {
  createJobError,
  createJobStart,
  createJobSuccess,
  removeMarker,
  resetAddresses,
  setAddress,
  setError,
  setMarker,
} from "../actions";

/**
 * Renders a search box on the top left of the screen
 * Includes input boxes for searching pickup an dropoff addresses,
 * as well as a button for creating jobs
 */
const Search: FunctionComponent = () => {
  const { state, dispatch } = useContext(Store);
  const { pickup, dropoff, isLoading } = state;

  /**
   * Gets geocode for a given address and a given type
   * If address is blank, remove marker
   * When found, sets a marker in the returned geolocation.
   * Otherwise, sets the corresponding marker to an error state.
   * @param addressType
   * @param address
   */
  const getCode = (addressType: AddressType, address: string): void => {
    if (address) {
      getGeoCodeRequest(address)
        .then((res) => {
          dispatch(setMarker(addressType, res.latitude, res.longitude));
        })
        .catch(() => {
          dispatch(setError(addressType));
        });
    } else {
      dispatch(removeMarker(addressType));
    }
  };

  /**
   * Debounced version of getCode, which triggers after 500ms without typing
   */
  const getCodeDebounced = useCallback(
    debounce((addressType: AddressType, address: string) => {
      getCode(addressType, address);
    }, 500),
    []
  );

  /**
   * Sends request for creating job
   * While loading, button is disabled and set to a loading state
   * On success, it displays a toaster
   */
  const createJob = (): void => {
    dispatch(createJobStart());
    createJobRequest(pickup.text, dropoff.text)
      .then(() => {
        dispatch(createJobSuccess());
        dispatch(resetAddresses());
      })
      .catch(() => {
        dispatch(createJobError());
      });
  };

  /**
   * Gets geocode for pickup address after 500 ms of not typing
   */
  useEffect(() => {
    if (pickup.text) {
      getCodeDebounced("pickup", pickup.text);
    }
  }, [pickup.text]);

  /**
   * Gets geocode for dropoff address after 500 ms of not typing
   */
  useEffect(() => {
    if (dropoff.text) {
      getCodeDebounced("dropoff", dropoff.text);
    }
  }, [dropoff.text]);

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
          aria-required
          aria-label="Pick up address"
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
          aria-required
          aria-label="Drop off address"
        />
      </div>
      <div className="flex-row">
        <button
          className="button-create-job"
          type="button"
          onClick={createJob}
          disabled={!(pickup.marker && dropoff.marker) || isLoading}
          aria-disabled={!(pickup.marker && dropoff.marker) || isLoading}
          aria-label="Create job"
        >
          {!isLoading ? "Create job" : "Creating..."}
        </button>
      </div>
    </div>
  );
};

export default Search;
