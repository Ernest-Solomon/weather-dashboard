import SearchBar from './components/SearchBar';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';

function App() {
  const handleSearch = (cityName) => {
    console.log('Searching for:', cityName);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          🌤️ Weather Dashboard
        </h1>
        
        <SearchBar onSearch={handleSearch} />
        <LoadingSpinner />
        <ErrorMessage message="Test error message" />
      </div>
    </div>
  );
}

export default App;
