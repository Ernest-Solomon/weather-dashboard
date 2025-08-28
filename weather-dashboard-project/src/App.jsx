import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import UnitToggle from './components/UnitToggle';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import { getWeatherData } from './api/OpenWeatherMap.jsx';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [unitPreference, setUnitPreference] = useState({
    temperature: 'celsius',
    windSpeed: 'kmh'
  });

  const handleSearch = async (cityName) => {
    if (!cityName.trim()) return;
    
    setIsLoading(true);
    setError(null);
    setWeatherData(null);

    try {
      const data = await getWeatherData(cityName);
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUnitChange = (unitType, value) => {
    setUnitPreference(prev => ({
      ...prev,
      [unitType]: value
    }));
  };

  const handleRetry = () => {
    setError(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            🌤️ Weather Dashboard
          </h1>
          <p className="text-white/90 text-lg mb-8">
            Get real-time weather information for any city worldwide
          </p>
        </div>

        {/* Search and Controls */}
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-8">
          <div className="w-full lg:w-auto">
            <SearchBar onSearch={handleSearch} isLoading={isLoading} />
          </div>
          <UnitToggle 
            unitPreference={unitPreference}
            onUnitChange={handleUnitChange}
          />
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {isLoading && <LoadingSpinner />}
          
          {error && (
            <ErrorMessage 
              message={error}
              onRetry={handleRetry}
            />
          )}
          
          {weatherData && !isLoading && !error && (
            <WeatherDisplay 
              weatherData={weatherData}
              unitPreference={unitPreference}
            />
          )}
          
          {!weatherData && !isLoading && !error && (
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center text-white">
              <div className="text-6xl mb-4">🌍</div>
              <h2 className="text-2xl font-semibold mb-4">Welcome to Weather Dashboard</h2>
              <p className="text-white/80 mb-6">
                Search for any city above to get started with real-time weather information
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl mb-2">🌡️</div>
                  <div className="text-sm font-medium">Temperature</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl mb-2">💨</div>
                  <div className="text-sm font-medium">Wind Speed</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl mb-2">💧</div>
                  <div className="text-sm font-medium">Humidity</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl mb-2">👁️</div>
                  <div className="text-sm font-medium">Visibility</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
