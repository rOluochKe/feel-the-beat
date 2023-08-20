import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import ArtistProfile from './pages/ArtistProfile';

function App() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold dark:text-white mt-2 mb-4">Feel The Beat</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:artistId" element={<ArtistProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
