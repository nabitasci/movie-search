import axios from 'axios';
import { SwalAlert } from '../components/Alert/Alert';

import appConfig from '../constants/Env';

const api = axios.create({
  baseURL: appConfig.serverCredentials.port
    ? `${appConfig.serverCredentials.host}:${appConfig.serverCredentials.port}/api`
    : `${appConfig.serverCredentials.host}/api`,
  params: {
    as: localStorage.getItem('manageSmbId'),
  },
  headers: {
    // Authorization: `Bearer ${getAccessToken()}`,
    Accept: 'application/json',
  },
});

api.show_notification = true;

api.interceptors.response.use(undefined, err => {
  if (!api.show_notification) {
    api.show_notification = true;
    return Promise.reject(err);
  }

  if (!err.response) {
    // network error
    SwalAlert(
      'Error',
      'We were not able to complete this process. Please wait a moment and then try again. Quote reference number 1360 when contacting our team to help resolve this issue.',
      'error',
    );
  } else {
    const response = err.response.data;
    const requestUrl = err.config.url.replace(err.config.baseURL, '');
    if (
      (err.response.status === 401 || err.response.status === 403) &&
      requestUrl !== '/auth/login'
    ) {
      window.location.href = '/login';

    }

    let errorMsg = '';
    if (response.status === 422) {
      if (response.error.fields) {
        Object.keys(response.error.fields).forEach(item => {
          const field = response.error.fields[item];
          for (let i = 0; i < field.length; i += 1) {
            errorMsg += `${field[i]}<br />`;
          }
        });
      } else {
        errorMsg = response.error.message;
      }
      errorMsg = `<div tabindex="0" aria-label="Error! ${errorMsg}">${errorMsg}</div>`;
      SwalAlert('Error!', errorMsg, 'error');
    } else {
      errorMsg = `<div tabindex="0" aria-label="Error! ${response.error.message}">${response.error.message}</div>`;
      SwalAlert('Error!', response.error.message, 'error');
    }
  }
  return Promise.reject(err);
});

export const API_STATUS = {
  INIT: 'INIT',
  SETUP: 'SETUP',
  LOADING: 'LOADING',
  FETCHED: 'FETCHED',
  FAILED: 'FAILED',
};

export default api;