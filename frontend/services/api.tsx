import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    'Content-Type': `multipart/form-data`,
    'Access-Control-Allow-Origin': `*`,
  },
});

export default api;