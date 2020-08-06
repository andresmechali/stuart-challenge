import { AddressType } from "./types";

export const setAddress = (
  addressType: "pickup" | "dropoff",
  text: string
) => ({ type: "SET_ADDRESS", addressType, text });

export const setMarker = (
  addressType: AddressType,
  lat: number,
  lng: number
) => ({
  type: "SET_MARKER",
  addressType,
  lat,
  lng,
});

export const removeMarker = (addressType: AddressType) => ({
  type: "REMOVE_MARKER",
  addressType,
});

export const setError = (addressType: AddressType) => ({
  type: "SET_ERROR",
  addressType,
});

export const resetAddresses = () => ({
  type: "RESET_ADDRESSES",
});

export const createJobStart = () => ({
  type: "CREATE_JOB_START",
});

export const createJobSuccess = () => ({
  type: "CREATE_JOB_SUCCESS",
});

export const createJobError = () => ({
  type: "CREATE_JOB_ERROR",
});

export const hideToaster = () => ({
  type: "HIDE_TOASTER",
});
