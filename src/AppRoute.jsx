// AppRouter.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Components/Login/Login'; // Tu componente de Login
import MainPage from './MainPage'; // La página principal de tu aplicación

const AppRouter = () => {
  // Estado para controlar si el usuario está autenticado
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <Routes>
        {/* Si el usuario no está autenticado, se redirige siempre al Login */}
        <Route
          path="/login"
          element={!isAuthenticated ? <Login onLoginSuccess={handleLoginSuccess} /> : <Navigate to="/main" />}
        />
        {/* Si el usuario está autenticado, se va a la página principal */}
        <Route
          path="/main"
          element={isAuthenticated ? <MainPage /> : <Navigate to="/login" />}
        />
        {/* Redirigir cualquier ruta desconocida a login */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
