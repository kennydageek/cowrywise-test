import axios from 'axios';
import router from './router';

export const http = axios.create({
  baseURL: import.meta.env.VITE_VUE_APP_API_BASE,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Client-ID ${import.meta.env.VITE_VUE_APP_ACCESS_KEY}`,
    'Accept-Version': 'v1',
  },
});

export { router };
