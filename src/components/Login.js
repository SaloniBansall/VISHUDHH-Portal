import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Make sure you create this CSS file or add the styles in your CSS file

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Retrieve the user data from the database or local storage
    const userData = JSON.parse(localStorage.getItem('userData'));

    if (userData && userData.username === username && userData.password === password) {
      // Set the user role in the application state or session
      localStorage.setItem('userRole', userData.role);
      navigate('/dashboard');
    } else {
      setError('Invalid username or password 😢'); 
    }
  };

  return (
    <div className="login-container">
      <div className="form-container">
        <h1 className="form-title">Login</h1>
        {error && <div className="error-message">{error}</div>} 
        <input
          type="text"
          className="form-input"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          className="form-input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="form-button" onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default LoginPage;
