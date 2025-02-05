// src/pages/CheckInScreen.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LoadingSpinner from '../components/LoadingSpinner';

const CheckInScreen = () => {
  // State for current check-ins
  const [checkins, setCheckins] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // State for manual search
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);

  // Fetch the list of currently checked in users on mount
  useEffect(() => {
    fetchCheckins();
  }, []);

  const fetchCheckins = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/checkins/current`);
      setCheckins(response.data);
    } catch (error) {
      console.error('Error fetching check-ins:', error);
    } finally {
      setLoading(false);
    }
  };

  // Handle search for users by first name and last name
  const handleSearch = async (e) => {
    e.preventDefault();
    setSearchLoading(true);

    // Log the API base URL for debugging
    console.log('API Base URL:', process.env.REACT_APP_API_BASE_URL);

    try {
      const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/users/search`, {
        params: { firstName, lastName }
      });
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error searching users:', error);
    } finally {
      setSearchLoading(false);
    }
  };

  // Handle manual check-in for a selected user
  const handleManualCheckin = async (userId) => {
    try {
      await axios.post(`${process.env.REACT_APP_API_BASE_URL}/checkins/checkin`, { user_id: userId });
      // Refresh the current check-ins list after a successful check-in
      fetchCheckins();
    } catch (error) {
      console.error('Error during manual check-in:', error);
    }
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Currently Checked In Users</h2>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          {checkins.length === 0 ? (
            <p>No users are currently checked in.</p>
          ) : (
            <ul>
              {checkins.map((checkin) => (
                <li key={checkin.id}>
                  {checkin.username} ({checkin.email}) — Checked in at: {new Date(checkin.check_in_time).toLocaleTimeString()}
                </li>
              ))}
            </ul>
          )}
        </>
      )}

      <h2>Manual Check-In</h2>
      <form onSubmit={handleSearch} style={{ marginBottom: '1rem' }}>
        <div style={{ marginBottom: '0.5rem' }}>
          <label style={{ marginRight: '0.5rem' }}>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
          />
        </div>
        <div style={{ marginBottom: '0.5rem' }}>
          <label style={{ marginRight: '0.5rem' }}>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
          />
        </div>
        <button type="submit" disabled={searchLoading}>
          {searchLoading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {searchResults.length > 0 && (
        <div>
          <h3>Search Results</h3>
          <ul>
            {searchResults.map((user) => (
              <li key={user.id}>
                {user.first_name} {user.last_name} ({user.email})
                <button
                  onClick={() => handleManualCheckin(user.id)}
                  style={{ marginLeft: '1rem' }}
                >
                  Check In
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CheckInScreen;
