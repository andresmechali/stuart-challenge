import { AddressType } from "./types";

export const debounce = (
  callback: (...args: any[]) => Promise<any>,
  ms: number = 0
) => {
  let timer: ReturnType<typeof setTimeout> | null = null;

  return (...args: any[]) => {
    clearTimeout(timer);
    return new Promise((resolve) => {
      timer = setTimeout(() => resolve(callback(...args)), ms);
    });
  };
};

export const getKey = (addressType: AddressType) => {
  if (addressType === "pickup") {
    return;
  }
};
