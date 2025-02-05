import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5001/api';

export const getBoulders = () => axios.get(`${API_BASE_URL}/boulders`);

export const getBoulderById = (id) => axios.get(`${API_BASE_URL}/boulders/${id}`);
