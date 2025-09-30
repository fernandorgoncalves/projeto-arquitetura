
export const getApiData = async (endpoint) => {

  try {
    const url = new URL(`https://dnc-react-api.vercel.app/files/${endpoint}`);
    const response = await fetch(url, {
      method: "GET",
    });
    if (!response.ok) {
      console.error(`Error:  ${response.status}`);
      return null;
    }
    const data = await response.json();
    return data;
  } catch (e) {
    console.error("Catch error:", e);
    return null;
  }
};
