const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

if (!API_KEY || API_KEY === "your_api_key_here") {
  throw new Error(
    "VITE_WEATHER_API_KEY is not defined or is still the placeholder value. Please set your real API key in .env.",
  );
}

export const getWeather = async (location) => {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${API_KEY}&contentType=json`,
  );

  if (!response.ok) {
    let message = `HTTP ${response.status} ${response.statusText}`;

    try {
      const errorData = await response.json();
      if (errorData?.message) {
        message += ` - ${errorData.message}`;
      }
    } catch {
      // ignore non-JSON error bodies
    }

    throw new Error(`Failed to fetch weather data: ${message}`);
  }

  const data = await response.json();

  return data;
};
