import { CHANGE_STATUS } from '../actions/Application';

const initialState = {
  status: 'INIT',
  error: {
    title: '',
    message: '',
  },
};

export default (state = initialState, { type, data, error = initialState.error }) => {
  switch (type) {
    case CHANGE_STATUS:
      return {
        ...state,
        status: data,
        error,
      };
    default:
      return state;
  }
};
