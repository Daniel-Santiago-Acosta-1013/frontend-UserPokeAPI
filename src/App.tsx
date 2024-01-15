import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Auth/Login/Login';
import Register from './components/Auth/Register/Register';
import FavoritesList from './components/Favorites/FavoritesList/FavoritesList';
import Header from './components/Layout/Header/Header';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/register" element={<Register />} />
        <Route 
          path="/favorites" 
          element={isAuthenticated ? <FavoritesList /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
