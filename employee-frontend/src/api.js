// src/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api/employees', // Your Express server URL
});

export default API;
