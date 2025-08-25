import React from 'react';

function WeatherIcon({ iconCode, description, size = 'large' }) {
  // Map OpenWeatherMap icon codes to emoji
  const getWeatherEmoji = (code) => {
    const iconMap = {
      // Clear sky
      '01d': '☀️',
      '01n': '🌙',
      
      // Few clouds
      '02d': '🌤️',
      '02n': '☁️',
      
      // Scattered clouds
      '03d': '☁️',
      '03n': '☁️',
      
      // Broken clouds
      '04d': '☁️',
      '04n': '☁️',
      
      // Shower rain
      '09d': '🌧️',
      '09n': '🌧️',
      
      // Rain
      '10d': '🌦️',
      '10n': '🌧️',
      
      // Thunderstorm
      '11d': '⛈️',
      '11n': '⛈️',
      
      // Snow
      '13d': '❄️',
      '13n': '❄️',
      
      // Mist/Fog
      '50d': '🌫️',
      '50n': '🌫️',
    };
    
    return iconMap[code] || '🌤️';
  };

  // Size classes
  const sizeClasses = {
    small: 'text-2xl',
    medium: 'text-4xl',
    large: 'text-6xl',
    xlarge: 'text-8xl'
  };

  const emoji = getWeatherEmoji(iconCode);

  return (
    <div className="flex flex-col items-center">
      {/* Weather Icon */}
      <div className={`${sizeClasses[size]} mb-2 animate-bounce-slow`}>
        {emoji}
      </div>
      
      {/* Description */}
      {description && (
        <span className="text-white/80 text-sm text-center capitalize leading-tight">
          {description}
        </span>
      )}
      
      {/* Animation styles - add to your CSS */}
      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default WeatherIcon;
