import React, { useEffect, useState } from 'react';
import { getBoulders } from '../services/boulderService';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';

const BoulderList = () => {
  const [boulders, setBoulders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBoulders()
      .then((response) => {
        setBoulders(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching boulders', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Boulders</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {boulders.map((boulder) => (
          <div key={boulder.id} style={{ border: '1px solid #ddd', padding: '1rem', width: '200px' }}>
            <h3>{boulder.name}</h3>
            {boulder.image_url && <img src={boulder.image_url} alt={boulder.name} style={{ width: '100%' }} />}
            <Link to={`/boulders/${boulder.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoulderList;
