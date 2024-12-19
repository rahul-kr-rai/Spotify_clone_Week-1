import React, { useState } from 'react';
import './index.css';
import Login from './components/Login';
import Signup from './components/Signup';

const App = () => {
  const [formType, setFormType] = useState('login');

  const showForm = (type) => {
    setFormType(type);
  };

  return (
    <div className="container">
      <div className="form-container">
        {formType === 'login' ? (
          <Login showForm={showForm} />
        ) : (
          <Signup showForm={showForm} />
        )}
      </div>
    </div>
  );
};

export default App;