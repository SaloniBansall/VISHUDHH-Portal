import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleSignup = () => {
    // Save the user data (username, password, role) to the database or local storage
    localStorage.setItem('userData', JSON.stringify({ username, password, role }));
    navigate('/login'); 
  };

  return (
    <div className="signup-container">
      <div className="form-container">
        <h1 className="form-title">Sign Up</h1>
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
        <select
          className="form-input"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="">Select Role</option>
          <option value="admin">Admin</option>
          <option value="district_incharge">District Incharge</option>
          <option value="state_incharge">State Incharge</option>
        </select>
        <button className="form-button" onClick={handleSignup}>Sign Up</button>
      </div>
    </div>
  );
};

export default SignupPage;



