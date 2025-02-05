import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5001/api';

export const getRouteById = (id) => axios.get(`${API_BASE_URL}/routes/${id}`);

export const submitFeedback = (routeId, feedback) =>
  axios.post(`${API_BASE_URL}/routes/${routeId}/feedback`, feedback);
