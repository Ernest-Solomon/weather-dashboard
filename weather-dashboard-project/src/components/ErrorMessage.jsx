// ErrorMessage.jsx
import React from 'react';

function ErrorMessage({ message, onRetry }) {
  return (
    <div className="max-w-md mx-auto">
      <div className="bg-red-500/20 backdrop-blur-sm border border-red-300/50 rounded-2xl p-6 text-center">
        {/* Error Icon */}
        <div className="text-6xl mb-4">⚠️</div>
        
        {/* Error Title */}
        <h3 className="text-xl font-semibold text-white mb-3">
          Oops! Something went wrong
        </h3>
        
        {/* Error Message */}
        <p className="text-white/90 mb-6 leading-relaxed">
          {message || "Unable to fetch weather data. Please try again."}
        </p>
        
        {/* Retry Button */}
        {onRetry && (
          <button
            onClick={onRetry}
            className="bg-white/20 hover:bg-white/30 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200 border border-white/30 hover:border-white/50"
          >
            Try Again
          </button>
        )}
        
        {/* Help Text */}
        <p className="text-white/60 text-sm mt-4">
          Make sure the city name is spelled correctly
        </p>
      </div>
    </div>
  );
}

export default ErrorMessage;
