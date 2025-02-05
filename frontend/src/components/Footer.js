import React from 'react';

const Footer = () => {
  return (
    <footer style={{ padding: '1rem', textAlign: 'center', backgroundColor: '#333', color: '#fff' }}>
      <p>&copy; {new Date().getFullYear()} Rock Gym Management</p>
    </footer>
  );
};

export default Footer;
