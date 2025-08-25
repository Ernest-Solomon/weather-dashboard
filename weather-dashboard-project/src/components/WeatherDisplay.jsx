import React from 'react';
import WeatherIcon from './WeatherIcon';

function WeatherDisplay({ weatherData, unitPreference }) {
  if (!weatherData) return null;

  // Temperature conversion functions
  const convertTemperature = (temp) => {
    if (unitPreference.temperature === 'fahrenheit') {
      return Math.round((temp * 9/5) + 32);
    }
    return Math.round(temp);
  };

  // Wind speed conversion functions
  const convertWindSpeed = (speed) => {
    if (unitPreference.windSpeed === 'mph') {
      return Math.round(speed * 0.621371);
    }
    return Math.round(speed);
  };

  const {
    name,
    sys: { country },
    main: { temp, feels_like, humidity, pressure },
    weather: [{ main: weatherMain, description, icon }],
    wind: { speed, deg = 0 },
    visibility = 0,
    clouds: { all: cloudiness = 0 }
  } = weatherData;

  const tempUnit = unitPreference.temperature === 'celsius' ? '°C' : '°F';
  const windUnit = unitPreference.windSpeed === 'kmh' ? 'km/h' : 'mph';

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-white/20 shadow-2xl">
        {/* Header - Location */}
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            {name}, {country}
          </h2>
          <p className="text-white/70">
            {new Date().toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>

        {/* Main Weather Info */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-8">
          {/* Weather Icon and Description */}
          <div className="text-center">
            <WeatherIcon 
              iconCode={icon} 
              description={description}
              size="xlarge" 
            />
          </div>

          {/* Temperature */}
          <div className="text-center">
            <div className="text-6xl md:text-7xl font-bold text-white mb-2">
              {convertTemperature(temp)}{tempUnit}
            </div>
            <p className="text-white/80 text-lg">
              Feels like {convertTemperature(feels_like)}{tempUnit}
            </p>
          </div>
        </div>

        {/* Weather Details Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {/* Humidity */}
          <div className="bg-white/10 rounded-xl p-4 text-center border border-white/10">
            <div className="text-3xl mb-2">💧</div>
            <div className="text-2xl font-semibold text-white">{humidity}%</div>
            <div className="text-white/70 text-sm">Humidity</div>
          </div>

          {/* Wind Speed */}
          <div className="bg-white/10 rounded-xl p-4 text-center border border-white/10">
            <div className="text-3xl mb-2">💨</div>
            <div className="text-2xl font-semibold text-white">
              {convertWindSpeed(speed)} {windUnit}
            </div>
            <div className="text-white/70 text-sm">Wind Speed</div>
          </div>

          {/* Pressure */}
          <div className="bg-white/10 rounded-xl p-4 text-center border border-white/10">
            <div className="text-3xl mb-2">🌡️</div>
            <div className="text-2xl font-semibold text-white">{pressure} hPa</div>
            <div className="text-white/70 text-sm">Pressure</div>
          </div>

          {/* Visibility */}
          <div className="bg-white/10 rounded-xl p-4 text-center border border-white/10">
            <div className="text-3xl mb-2">👁️</div>
            <div className="text-2xl font-semibold text-white">
              {Math.round(visibility / 1000)} km
            </div>
            <div className="text-white/70 text-sm">Visibility</div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="flex flex-wrap justify-center gap-6 text-white/70 text-sm">
          <div className="flex items-center gap-2">
            <span>☁️</span>
            <span>Cloudiness: {cloudiness}%</span>
          </div>
          {deg && (
            <div className="flex items-center gap-2">
              <span>🧭</span>
              <span>Wind Direction: {deg}°</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default WeatherDisplay;
