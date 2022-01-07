import {
  LOAD_INQUIRIES_START,
  LOAD_INQUIRIES_LOADED,
  LOAD_INQUIRIES_ERROR,
  CLEAR_INQUIRIES,
} from '../actions';

const initialState = {
  loading: true,
  updating: false,
  error: undefined,
  data: [],
  page: 1,
};

// eslint-disable-next-line default-param-last
const inquiriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_INQUIRIES_START:
      return {
        ...state,
        loading: state.page === 1,
        updating: state.page > 1,
        data: state.page > 1 ? state.data : [],
        page: state.page === 15 ? 1 : state.page + 1,
      };
    case LOAD_INQUIRIES_LOADED:
      return {
        ...state,
        loading: false,
        updating: false,
        data: [...state.data, ...action.payload],
      };
    case LOAD_INQUIRIES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CLEAR_INQUIRIES:
      return initialState;
    default:
      return state;
  }
};

export default inquiriesReducer;
