// components/SearchBar.jsx
import React, { useState } from 'react';

const SearchBar = ({ onSearch, isLoading }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() && !isLoading) {
      onSearch(inputValue.trim());
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 w-full lg:w-auto">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter city name..."
        disabled={isLoading}
        className="flex-1 lg:w-80 px-4 py-3 rounded-full border-2 border-white/20 bg-white/90 backdrop-blur-sm text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
      />
      <button
        type="submit"
        disabled={isLoading || !inputValue.trim()}
        className="px-6 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center gap-2"
      >
        🔍 Search
      </button>
    </form>
  );
};

export default SearchBar;
