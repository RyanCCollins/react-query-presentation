import {
  LOAD_PROPERTIES_START,
  LOAD_PROPERTIES_LOADED,
  LOAD_PROPERTIES_ERROR,
} from '../actions';

const initialState = {
  loading: true,
  error: undefined,
  data: [],
};

// eslint-disable-next-line default-param-last
const propertiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PROPERTIES_START:
      return {
        ...state,
        loading: true,
      };
    case LOAD_PROPERTIES_LOADED:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case LOAD_PROPERTIES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default propertiesReducer;
