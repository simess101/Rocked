import React from 'react';

const LoadingSpinner = () => (
  <div style={{ textAlign: 'center', padding: '2rem' }}>
    <div className="spinner" />
    <style jsx>{`
      .spinner {
        border: 4px solid rgba(0,0,0,0.1);
        width: 36px;
        height: 36px;
        border-radius: 50%;
        border-left-color: #a0522d;
        animation: spin 1s ease infinite;
        margin: auto;
      }
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

export default LoadingSpinner;
