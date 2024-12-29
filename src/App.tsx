import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import CRADashboard from './components/CRADashboard/CRADashboard';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-semibold text-gray-800">CRA System</h1>
              <div className="space-x-4">
                <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
                <Link to="/cra-players" className="text-gray-600 hover:text-gray-900">Players</Link>
              </div>
            </div>
          </div>
        </nav>
        <main className="max-w-7xl mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cra-players" element={<CRADashboard />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

const Home: React.FC = () => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Welcome to CRA System</h2>
      <p className="mb-4">Customer Risk Assessment System for iGaming</p>
      <Link 
        to="/cra-players" 
        className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        View Players
      </Link>
    </div>
  );
};

export default App; 