import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import TrackList from '../components/TrackList';
import { Track } from '../Type';
import { useApi } from '../hooks/useApi';
import Spinner from '../components/elements/Spinner';

import { API_BASE_URL } from '../config';

const Home = () => {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [searchQuery, setSearchQuery] = useState('Burna Boy');

  const searchUrl = `${API_BASE_URL}/search?q=${searchQuery}`;
  const [searchResults, loading, error] = useApi<{ data: Track[] }>(searchUrl);

  // Update tracks state when searchResults change
  useEffect(() => {
    if (searchResults) {
      setTracks(searchResults.data);
    }
  }, [searchResults]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {loading ? (
        <Spinner />
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <TrackList tracks={tracks} />
      )}
    </div>
  );
};

export default Home;
