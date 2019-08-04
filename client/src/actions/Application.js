export const CHANGE_STATUS = 'CHANGE_STATUS';

export const APP_STATUS = {
  INIT: 'INIT',
  LOADING: 'LOADING',
  FETCHED: 'FETCHED',
  FAILED: 'FAILED',
  SOFT_FAILED: 'SOFT_FAILED',
};

export const loading = () => ({
  type: CHANGE_STATUS,
  data: APP_STATUS.LOADING,
});

export const success = () => ({
  type: CHANGE_STATUS,
  data: APP_STATUS.FETCHED,
});

export const fail = error => ({
  type: CHANGE_STATUS,
  data: APP_STATUS.FAILED,
  error,
});
