import React, {
  createContext,
  FunctionComponent,
  Reducer,
  useReducer,
} from "react";

import { Address, Action } from "./types";

const initialAddress: Address = {
  searched: false,
  found: false,
  text: "",
  marker: null,
};

const initialState: any = {
  pickup: initialAddress,
  dropoff: initialAddress,
  isLoading: false,
  showToaster: false,
};

export const Store = createContext(initialState);

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
    case "REMOVE_MARKER":
      return {
        ...state,
        [action.addressType]: {
          ...state[action.addressType],
          marker: null,
          searched: false,
          found: false,
        },
      };
    case "SET_ERROR":
      return {
        ...state,
        [action.addressType]: {
          ...state[action.addressType],
          searched: true,
          found: false,
          marker: null,
        },
      };
    case "RESET_ADDRESSES":
      return {
        ...state,
        pickup: initialAddress,
        dropoff: initialAddress,
      };
    case "CREATE_JOB_START":
      return {
        ...state,
        isLoading: true,
      };
    case "CREATE_JOB_SUCCESS":
      return {
        ...state,
        isLoading: false,
        showToaster: true,
      };
    case "CREATE_JOB_ERROR":
      return {
        ...state,
        isLoading: false,
      };
    case "HIDE_TOASTER":
      return {
        ...state,
        showToaster: false,
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

export default Store;
