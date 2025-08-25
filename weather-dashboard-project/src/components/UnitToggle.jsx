import React from 'react';

function UnitToggle({ unitPreference, onUnitChange }) {
  const handleTemperatureToggle = (unit) => {
    onUnitChange('temperature', unit);
  };

  const handleWindSpeedToggle = (unit) => {
    onUnitChange('windSpeed', unit);
  };

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        {/* Temperature Unit Toggle */}
        <div className="flex flex-col items-center">
          <span className="text-white/80 text-sm mb-2 font-medium">Temperature</span>
          <div className="flex bg-white/10 rounded-lg p-1">
            <button
              onClick={() => handleTemperatureToggle('celsius')}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 ${
                unitPreference.temperature === 'celsius'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              °C
            </button>
            <button
              onClick={() => handleTemperatureToggle('fahrenheit')}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 ${
                unitPreference.temperature === 'fahrenheit'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              °F
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden sm:block w-px h-12 bg-white/20"></div>
        <div className="sm:hidden w-full h-px bg-white/20"></div>

        {/* Wind Speed Unit Toggle */}
        <div className="flex flex-col items-center">
          <span className="text-white/80 text-sm mb-2 font-medium">Wind Speed</span>
          <div className="flex bg-white/10 rounded-lg p-1">
            <button
              onClick={() => handleWindSpeedToggle('kmh')}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 ${
                unitPreference.windSpeed === 'kmh'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              km/h
            </button>
            <button
              onClick={() => handleWindSpeedToggle('mph')}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 ${
                unitPreference.windSpeed === 'mph'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              mph
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UnitToggle;
