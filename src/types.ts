export type GeoCodeResponse = {
  address: string;
  latitude: number;
  longitude: number;
};

export type GeoCode = {
  lat: number;
  lng: number;
};

export type Address = {
  searched: boolean;
  found: boolean;
  text: string;
  marker?: {
    lat: number;
    lng: number;
  } | null;
};

export interface StoreState {
  pickUpAddress: Address;
  dropOffAddress: Address;
}

export type AddressType = "pickup" | "dropoff";

export type Action =
  | { type: "SET_ADDRESS"; addressType: AddressType; text: string }
  | {
      type: "SET_MARKER";
      addressType: AddressType;
      lat: number;
      lng: number;
    }
  | { type: "SET_ERROR"; addressType: AddressType };
