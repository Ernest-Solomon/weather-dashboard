// components/WeatherDisplay.jsx
import React from 'react';
import WeatherIcon from './WeatherIcon';

const WeatherDisplay = ({ weatherData, unitPreference }) => {
  // Temperature conversion functions
  const convertTemperature = (temp) => {
    if (unitPreference.temperature === 'fahrenheit') {
      return Math.round((temp * 9/5) + 32);
    }
    return Math.round(temp);
  };

  // Wind speed conversion
  const convertWindSpeed = (speed) => {
    if (unitPreference.windSpeed === 'mph') {
      return Math.round(speed * 0.621371);
    }
    return Math.round(speed);
  };

  const getTemperatureUnit = () => {
    return unitPreference.temperature === 'fahrenheit' ? '°F' : '°C';
  };

  const getWindSpeedUnit = () => {
    return unitPreference.windSpeed === 'mph' ? 'mph' : 'km/h';
  };

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-xl border border-white/20">
      {/* City and Country */}
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
          {weatherData.name}, {weatherData.sys.country}
        </h2>
        <p className="text-white/80 text-sm">
          {new Date().toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </p>
      </div>

      {/* Main Weather Info */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
        <WeatherIcon iconCode={weatherData.weather[0].icon} size="large" />
        <div className="text-center md:text-left">
          <div className="text-5xl md:text-6xl font-light text-white mb-2">
            {convertTemperature(weatherData.main.temp)}{getTemperatureUnit()}
          </div>
          <div className="text-xl text-white/90 mb-2 capitalize">
            {weatherData.weather[0].description}
          </div>
          <div className="text-white/80">
            Feels like {convertTemperature(weatherData.main.feels_like)}{getTemperatureUnit()}
          </div>
        </div>
      </div>

      {/* Weather Details Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white/10 rounded-xl p-4 text-center">
          <div className="text-2xl mb-2">💧</div>
          <div className="text-white/70 text-sm mb-1">Humidity</div>
          <div className="text-white text-xl font-semibold">
            {weatherData.main.humidity}%
          </div>
        </div>
        
        <div className="bg-white/10 rounded-xl p-4 text-center">
          <div className="text-2xl mb-2">💨</div>
          <div className="text-white/70 text-sm mb-1">Wind Speed</div>
          <div className="text-white text-xl font-semibold">
            {convertWindSpeed(weatherData.wind.speed)} {getWindSpeedUnit()}
          </div>
        </div>
        
        <div className="bg-white/10 rounded-xl p-4 text-center">
          <div className="text-2xl mb-2">🌡️</div>
          <div className="text-white/70 text-sm mb-1">Pressure</div>
          <div className="text-white text-xl font-semibold">
            {weatherData.main.pressure} hPa
          </div>
        </div>
        
        <div className="bg-white/10 rounded-xl p-4 text-center">
          <div className="text-2xl mb-2">👁️</div>
          <div className="text-white/70 text-sm mb-1">Visibility</div>
          <div className="text-white text-xl font-semibold">
            {Math.round(weatherData.visibility / 1000)} km
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        <div className="bg-white/5 rounded-lg p-3">
          <div className="text-white/70 text-xs mb-1">Min Temp</div>
          <div className="text-white font-semibold">
            {convertTemperature(weatherData.main.temp_min)}{getTemperatureUnit()}
          </div>
        </div>
        <div className="bg-white/5 rounded-lg p-3">
          <div className="text-white/70 text-xs mb-1">Max Temp</div>
          <div className="text-white font-semibold">
            {convertTemperature(weatherData.main.temp_max)}{getTemperatureUnit()}
          </div>
        </div>
        <div className="bg-white/5 rounded-lg p-3">
          <div className="text-white/70 text-xs mb-1">Wind Direction</div>
          <div className="text-white font-semibold">
            {weatherData.wind.deg}°
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
