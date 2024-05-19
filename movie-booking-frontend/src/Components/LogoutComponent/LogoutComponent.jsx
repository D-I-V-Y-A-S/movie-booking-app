import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutComponent = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      console.log(window.localStorage.getItem('token'))
      try {
        const token = window.localStorage.getItem('token')
        if (token) {
          window.localStorage.removeItem('token');
          navigate('/login');
        }
        else {
          window.location.href='/login'
        }
      }
      catch (error) {
        console.error('Error logging out:', error);
      }
    };

    logout();
  }, [navigate]);

  return (
    <div>
      Logging out...
    </div>
  );
};

export default LogoutComponent;
