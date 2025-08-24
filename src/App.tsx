import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MusicListPage from './pages/MusicListPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MusicListPage />} />
      </Routes>
    </Router>
  );
}

export default App;
