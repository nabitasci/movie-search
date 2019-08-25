import api, { API_STATUS } from '../../util/api';

// Actions
const REQUEST = 'movie/REQUEST';
const SUCCESS = 'movie/SUCCESS';
const FAIL = 'movie/FAIL';

// Action Creators
export const success = (movie, data) => ({
  type: SUCCESS,
  movie,
  data,
});

export const fail = (movie, error) => ({
  type: FAIL,
  movie,
  error,
});

export const request = movie => async dispatch => {
  dispatch({ type: REQUEST, movie });

  try {
    const { data, ok, problem } = await api.get(`/search?keyword=${movie.toLowerCase()}`);

    if (!ok) {
      dispatch(fail(problem));
      return;
    }

    dispatch(success(movie, data));
  } catch (err) {
    dispatch(fail(movie, err.message));
  }
};

// Reducer
export default (state = {}, { type, data, error }) => {
  switch (type) {
    case REQUEST:
      return {
        ...state,
        ['movieList']: {
          data: {},
          error: null,
        },
        status: API_STATUS.LOADING,
      };
    case SUCCESS:
      return {
        ...state,
        ['movieList']: {
          
          data,
          error: null,
        },
        status: API_STATUS.FETCHED,
      };
    case FAIL:
      return {
        ...state,
        ['movieList']: {
          
          data: {},
          error,
        },
        status: API_STATUS.FAILED,
      };
    default:
      return state;
  }
};