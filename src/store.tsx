import React, {
  createContext,
  FunctionComponent,
  Reducer,
  useReducer,
} from "react";

import { Address, Action, AddressType } from "./types";

const initialAddress: Address = {
  searched: false,
  found: false,
  text: "",
};

const initialState: any = {
  pickup: initialAddress,
  dropoff: initialAddress,
};

export const Store = createContext(initialState);

export const setAddress = (addressType: "pickup" | "dropoff", text: string) => {
  return {
    type: "SET_ADDRESS",
    addressType,
    text,
  };
};

export const setMarker = (
  addressType: AddressType,
  lat: number,
  lng: number
) => {
  return {
    type: "SET_MARKER",
    addressType,
    lat,
    lng,
  };
};

export const setError = (addressType: AddressType) => {
  return {
    type: "SET_ERROR",
    addressType,
  };
};

const reducer = (state: typeof initialState, action: Action) => {
  switch (action.type) {
    case "SET_ADDRESS":
      return {
        ...state,
        [action.addressType]: {
          ...state[action.addressType],
          text: action.text,
        },
      };
    case "SET_MARKER":
      return {
        ...state,
        [action.addressType]: {
          ...state[action.addressType],
          found: true,
          searched: true,
          marker: {
            lat: action.lat,
            lng: action.lng,
          },
        },
      };
    case "SET_ERROR":
      return {
        ...state,
        [action.addressType]: {
          ...state[action.addressType],
          searched: true,
          found: false,
        },
      };
    default:
      return state;
  }
};

export const StoreProvider: FunctionComponent<{ children: any }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer<Reducer<any, any>>(
    reducer,
    initialState
  );

  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};
