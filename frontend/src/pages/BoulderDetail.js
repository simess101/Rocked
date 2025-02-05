import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBoulderById } from '../services/boulderService';
import LoadingSpinner from '../components/LoadingSpinner';

const BoulderDetail = () => {
  const { id } = useParams();
  const [boulder, setBoulder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBoulderById(id)
      .then((response) => {
        setBoulder(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching boulder details', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <LoadingSpinner />;
  if (!boulder) return <p>Boulder not found</p>;

  return (
    <div style={{ padding: '1rem' }}>
      <h2>{boulder.name}</h2>
      {boulder.image_url && <img src={boulder.image_url} alt={boulder.name} style={{ maxWidth: '100%' }} />}
      <p>Location: {boulder.location}</p>
      <div>
        <h3>Routes on this Boulder</h3>
        {boulder.routes && boulder.routes.length > 0 ? (
          <ul>
            {boulder.routes.map((route) => (
              <li key={route.id}>
                <a href={`/routes/${route.id}`}>{route.name} - {route.difficulty}</a>
              </li>
            ))}
          </ul>
        ) : (
          <p>No routes set for this boulder yet.</p>
        )}
      </div>
    </div>
  );
};

export default BoulderDetail;
