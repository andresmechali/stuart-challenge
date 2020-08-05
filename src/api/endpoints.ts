export const getGeoCode = async (address: string): Promise<any> => {
  const response = await fetch(
    "https://stuart-frontend-challenge.now.sh/geocode",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ address }),
    }
  );
  return response.json();
};
