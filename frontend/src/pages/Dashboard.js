import React from 'react';
import Header from '../components/Header';

const Dashboard = () => {
  return (
    <div>
      <Header />
      <div style={{ padding: '1rem' }}>
        <h2>Dashboard</h2>
        <p>Welcome to the Rock Gym Management System. Use the navigation bar to explore boulders and routes.</p>
      </div>
    </div>
  );
};

export default Dashboard;
