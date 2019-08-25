import { create } from 'apisauce';

const api = create({
  baseURL: 'http://localhost:8000/api', // TODO: Get from ENV
});

export const API_STATUS = {
  INIT: 'INIT',
  LOADING: 'LOADING',
  FETCHED: 'FETCHED',
  FAILED: 'FAILED',
};

export default api;