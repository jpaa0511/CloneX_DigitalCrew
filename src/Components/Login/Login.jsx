// Login.js
import React, { useState, useEffect } from 'react';
// import './Login.css';

const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validUser = { email: 'usuario@example.com', password: '123456' };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');
    
    if (email === validUser.email && password === validUser.password) {
      // Llamar a la función para indicar que el login fue exitoso
      onLoginSuccess();
    } else {
      setErrorMessage(email !== validUser.email ? 'Usuario no existe' : 'Contraseña incorrecta');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default Login;
