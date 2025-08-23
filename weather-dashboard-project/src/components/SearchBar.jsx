// SearchBar.jsx
import React, { useState } from 'react';

function SearchBar({ onSearch, isLoading = false }) {
  const [cityInput, setCityInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cityInput.trim() && !isLoading) {
      onSearch(cityInput.trim());
    }
  };

  const handleInputChange = (e) => {
    setCityInput(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto lg:mx-0">
      <div className="relative">
        {/* Search Input */}
        <input
          type="text"
          value={cityInput}
          onChange={handleInputChange}
          placeholder="Enter city name (e.g., London, Paris, Tokyo)"
          disabled={isLoading}
          className="w-full py-3 px-4 pr-12 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
        />
        
        {/* Search Button */}
        <button
          type="submit"
          disabled={!cityInput.trim() || isLoading}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-lg bg-white/20 hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
        >
          {isLoading ? (
            <div className="w-5 h-5 border-2 border-white/70 border-t-transparent rounded-full animate-spin"></div>
          ) : (
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Popular Cities Quick Search */}
      <div className="mt-3 flex flex-wrap gap-2">
        <p className="text-white/60 text-sm w-full">Quick search:</p>
        {['London', 'New York', 'Tokyo', 'Paris'].map((city) => (
          <button
            key={city}
            type="button"
            onClick={() => !isLoading && onSearch(city)}
            disabled={isLoading}
            className="text-xs bg-white/10 hover:bg-white/20 text-white/90 px-3 py-1 rounded-full transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {city}
          </button>
        ))}
      </div>
    </form>
  );
}

export default SearchBar;
