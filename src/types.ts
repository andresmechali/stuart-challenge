export type Address = {
  searched: boolean;
  found: boolean;
  text: string;
  marker?: {
    lat: number;
    lng: number;
  } | null;
};

export type AddressType = "pickup" | "dropoff";

export type Action =
  | { type: "SET_ADDRESS"; addressType: AddressType; text: string }
  | {
      type: "SET_MARKER";
      addressType: AddressType;
      lat: number;
      lng: number;
    }
  | { type: "SET_ERROR"; addressType: AddressType }
  | { type: "RESET_ADDRESSES" }
  | { type: "CREATE_JOB_START" }
  | { type: "CREATE_JOB_SUCCESS" }
  | { type: "CREATE_JOB_ERROR" }
  | { type: "HIDE_TOASTER" };
