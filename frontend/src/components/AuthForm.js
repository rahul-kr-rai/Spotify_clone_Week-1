import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';

const AuthForm = () => {
  const [formType, setFormType] = useState('login');

  const showForm = (type) => {
    setFormType(type);
  };

  return (
    <div className="container">
      <div className="form-container">
        <div className="form-toggle">
          <button onClick={() => showForm('login')}>Login</button>
          <button onClick={() => showForm('signup')}>Signup</button>
        </div>
        {formType === 'login' ? <Login /> : <Signup />}
      </div>
    </div>
  );
};

export default AuthForm;