// LoadingSpinner.jsx
import React from 'react';

function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center p-8">
      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 text-center">
        {/* Spinner Animation */}
        <div className="relative mx-auto w-16 h-16 mb-4">
          <div className="absolute inset-0 rounded-full border-4 border-white/30"></div>
          <div className="absolute inset-0 rounded-full border-4 border-white border-t-transparent animate-spin"></div>
        </div>
        
        {/* Loading Text */}
        <p className="text-white font-medium text-lg">
          Loading weather data...
        </p>
        <p className="text-white/70 text-sm mt-2">
          Please wait while we fetch the latest information
        </p>
      </div>
    </div>
  );
}

export default LoadingSpinner;
