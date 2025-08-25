// openWeatherMap.js
import axios from 'axios';  // ← Don't forget this line!

// Get API key from environment variable
const API_KEY = import.meta.env.VITE_OPENWEATHERMAP_API_KEY;
console.log('Debug - API Key:', API_KEY); // Add this debug line
console.log('Debug - All env vars:', import.meta.env); // Add this too
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const getWeatherData = async (cityName) => {
  try {
    if (!cityName || cityName.trim().length === 0) {
      throw new Error('Please provide a city name');
    }

    // Check if API key exists
    if (!API_KEY || API_KEY.trim() === '') {
      throw new Error('Please add your OpenWeatherMap API key to the .env file');
    }
    // Make API request to OpenWeatherMap
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        q: cityName.trim(),
        appid: API_KEY,
        units: 'metric', // Always get data in Celsius, convert in component
      }
    });

    return response.data;

  } catch (error) {
    // Handle different types of errors
    if (error.response) {
      // API responded with error status
      switch (error.response.status) {
        case 404:
          throw new Error(`City "${cityName}" not found. Please check the spelling and try again.`);
        case 401:
          throw new Error('Invalid API key. Please check your OpenWeatherMap API key.');
        case 429:
          throw new Error('Too many requests. Please wait a moment and try again.');
        default:
          throw new Error(`Weather service error: ${error.response.data.message || 'Unknown error'}`);
      }
    } else if (error.request) {
      // Network error
      throw new Error('Network error. Please check your internet connection and try again.');
    } else {
      // Other errors
      throw new Error(error.message || 'An unexpected error occurred');
    }
  }
};

// Function to get weather data for multiple cities (bonus feature)
export const getWeatherForMultipleCities = async (cities) => {
  try {
    const promises = cities.map(city => getWeatherData(city));
    const results = await Promise.allSettled(promises);
    
    return results.map((result, index) => ({
      city: cities[index],
      status: result.status,
      data: result.status === 'fulfilled' ? result.value : null,
      error: result.status === 'rejected' ? result.reason.message : null
    }));
  } catch (error) {
    throw new Error('Failed to fetch weather data for multiple cities');
  }
};

// Helper function to format weather data (if needed)
export const formatWeatherData = (data) => {
  if (!data) return null;

  return {
    city: data.name,
    country: data.sys.country,
    temperature: Math.round(data.main.temp),
    feelsLike: Math.round(data.main.feels_like),
    description: data.weather[0].description,
    icon: data.weather[0].icon,
    humidity: data.main.humidity,
    pressure: data.main.pressure,
    windSpeed: data.wind.speed,
    windDirection: data.wind.deg,
    visibility: data.visibility,
    cloudiness: data.clouds.all,
    timestamp: new Date().toISOString()
  };
};
