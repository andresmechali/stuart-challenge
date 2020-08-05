const baseUrl = "https://stuart-frontend-challenge.now.sh";

/**
 * Gets geocode for a given address
 * @param address
 */
export const getGeoCodeRequest = async (address: string): Promise<any> => {
  const response = await fetch(`${baseUrl}/geocode`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ address }),
  });
  if (!response.ok) {
    throw new Error(`Address ${address} does not exist.`);
  }
  return response.json();
};

/**
 * Creates a job, given a pickup and a dropoff address
 * @param pickup
 * @param dropoff
 */
export const createJobRequest = async (
  pickup: string,
  dropoff: string
): Promise<any> => {
  const response = await fetch(`${baseUrl}/jobs`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ pickup, dropoff }),
  });
  if (!response.ok) {
    throw new Error("Invalid addresses. Please try again.");
  }
  return response.json();
};
