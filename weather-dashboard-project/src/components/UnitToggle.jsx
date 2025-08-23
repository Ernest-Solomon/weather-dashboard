// components/UnitToggle.jsx
import React from 'react';

const UnitToggle = ({ unitPreference, onUnitChange }) => {
  const handleTemperatureToggle = (unit) => {
    onUnitChange('temperature', unit);
  };

  const handleWindSpeedToggle = (unit) => {
    onUnitChange('windSpeed', unit);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      {/* Temperature Toggle */}
      <div className="flex bg-white/20 rounded-full p-1">
        <button
          onClick={() => handleTemperatureToggle('celsius')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            unitPreference.temperature === 'celsius'
              ? 'bg-white text-blue-600 shadow-md'
              : 'text-white hover:bg-white/10'
          }`}
        >
          °C
        </button>
        <button
          onClick={() => handleTemperatureToggle('fahrenheit')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            unitPreference.temperature === 'fahrenheit'
              ? 'bg-white text-blue-600 shadow-md'
              : 'text-white hover:bg-white/10'
          }`}
        >
          °F
        </button>
      </div>

      {/* Wind Speed Toggle */}
      <div className="flex bg-white/20 rounded-full p-1">
        <button
          onClick={() => handleWindSpeedToggle('kmh')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            unitPreference.windSpeed === 'kmh'
              ? 'bg-white text-blue-600 shadow-md'
              : 'text-white hover:bg-white/10'
          }`}
        >
          km/h
        </button>
        <button
          onClick={() => handleWindSpeedToggle('mph')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            unitPreference.windSpeed === 'mph'
              ? 'bg-white text-blue-600 shadow-md'
              : 'text-white hover:bg-white/10'
          }`}
        >
          mph
        </button>
      </div>
    </div>
  );
};

export default UnitToggle;
