import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const NavigationBar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav style={{ padding: '1rem', backgroundColor: '#a0522d', color: '#fff' }}>
      <Link to="/" style={{ marginRight: '1rem', fontWeight: 'bold', color: '#fff' }}>
        Rock Gym
      </Link>
      {user ? (
        <>
          <Link to="/boulders" style={{ marginRight: '1rem', color: '#fff' }}>
            Boulders
          </Link>
          <Link to="/checkins" style={{ marginRight: '1rem', color: '#fff' }}>
            Check-Ins
          </Link>
          <button
            onClick={handleLogout}
            style={{
              backgroundColor: '#ff4500',
              border: 'none',
              padding: '0.5rem 1rem',
              color: '#fff',
              cursor: 'pointer',
            }}
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <Link to="/login" style={{ marginRight: '1rem', color: '#fff' }}>
            Login
          </Link>
          <Link to="/register" style={{ color: '#fff' }}>
            Register
          </Link>
        </>
      )}
    </nav>
  );
};

export default NavigationBar;
