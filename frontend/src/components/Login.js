import React, { useState } from 'react';
import spotifyLogo from '../Spotify.png'; // Ensure the path and case are correct

const Login = ({ showForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div id="loginForm" className="form">
      <center>
        <img src={spotifyLogo} alt="Spotify Logo" className="logo" />
      </center>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter email id"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <a href="#">Forgot password?</a>
        <input type="submit" className="button" value="Login" />
      </form>
      <div className="signup">
        <span className="signup" style={{ color: '#9b9b9b' }}>
          Don't have an account?
          <label onClick={() => showForm('signup')} style={{ cursor: 'pointer', color: '#00ff33' }}>
            Signup
          </label>
        </span>
      </div>
    </div>
  );
};

export default Login;