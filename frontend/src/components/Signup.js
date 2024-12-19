import React, { useState } from 'react';
import spotifyLogo from '../Spotify.png'; // Ensure the path and case are correct

const Signup = ({ showForm }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
  };

  return (
    <div id="signupForm" className="form">
      <center>
        <img src={spotifyLogo} alt="Spotify Logo" className="logo" />
      </center>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Enter email id"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Enter Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Create Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <input type="submit" className="button" value="Signup" />
      </form>
      <div className="signup">
        <span className="signup" style={{ color: '#9b9b9b' }}>
          Already have an account?
          <label onClick={() => showForm('login')} style={{ cursor: 'pointer', color: '#00ff33' }}>
            Login
          </label>
        </span>
      </div>
    </div>
  );
};

export default Signup;