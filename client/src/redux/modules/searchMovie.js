import api, { API_STATUS } from "../../util/api";

// Actions
const REQUEST = "movie/REQUEST";
const SUCCESS = "movie/SUCCESS";
const FAIL = "movie/FAIL";

// Action Creators
export const success = (movie, data) => ({
  type: SUCCESS,
  movie,
  data
});

export const fail = (movie, error) => ({
  type: FAIL,
  movie,
  error
});

export const request = movie => async dispatch => {
  dispatch({ type: REQUEST, movie });

  const cachedMovies = window["__data"];
  if (!cachedMovies || !cachedMovies.hasOwnProperty(movie)) {
    try {
      const { data, ok, problem } = await api.get(
        `/search?keyword=${movie.toLowerCase()}`
      );

      if (!ok) {
        dispatch(fail(problem));
        return;
      }
      // Store to cache
      window["__data"] = {
        ...cachedMovies,
        [movie.toLowerCase()]: {
          data
        }
      };

      dispatch(success(movie, data));
    } catch (err) {
      dispatch(fail(movie, err.message));
    }
  } else {
    dispatch(success(movie, cachedMovies[movie].data));
  }
};

export const initialState = {
  movieList: {
    data: {}
  },
  status: API_STATUS.INIT
};

// Reducer
export default (state = initialState, { type, data, error }) => {
  switch (type) {
    case REQUEST:
      return {
        ...state,
        movieList: {
          data: {},
          error: null
        },
        status: API_STATUS.LOADING
      };
    case SUCCESS:
      return {
        ...state,
        movieList: {
          data,
          error: null
        },
        status: data ? API_STATUS.FETCHED : API_STATUS.INIT 
      };
    case FAIL:
      return {
        ...state,
        movieList: {
          data: {},
          error
        },
        status: API_STATUS.FAILED
      };
    default:
      return state;
  }
};
