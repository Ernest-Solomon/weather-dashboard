// api/openWeatherMap.js
const API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY'; // Replace with your actual API key
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const getWeatherData = async (cityName) => {
  try {
    const response = await fetch(
      `${BASE_URL}?q=${encodeURIComponent(cityName)}&appid=${API_KEY}&units=metric`
    );

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error(`City "${cityName}" not found. Please check the spelling and try again.`);
      } else if (response.status === 401) {
        throw new Error('API key is invalid. Please check your OpenWeatherMap API configuration.');
      } else if (response.status >= 500) {
        throw new Error('Weather service is temporarily unavailable. Please try again later.');
      } else {
        throw new Error('Failed to fetch weather data. Please try again.');
      }
    }

    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof TypeError) {
      throw new Error('Network error. Please check your internet connection and try again.');
    }
    throw error;
  }
};
