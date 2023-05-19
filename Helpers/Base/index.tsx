import axios from 'axios';

const baseAxios = axios.create({
  baseURL: process.env.API_URL,
});

export { baseAxios };
