import { getProperties } from '../api';

export const LOAD_PROPERTIES_START = 'LOAD_PROPERTIES_START';
export const LOAD_PROPERTIES_LOADED = 'LOAD_PROPERTIES_LOADED';
export const LOAD_PROPERTIES_ERROR = 'LOAD_PROPERTIES_ERROR';

export const loadProperties = () => (dispatch) => {
  dispatch({
    type: LOAD_PROPERTIES_START,
  });

  return getProperties()
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: LOAD_PROPERTIES_LOADED,
        payload: data,
      });
    })
    .catch((err) => {
      dispatch({
        type: LOAD_PROPERTIES_ERROR,
        payload: err,
      });
    });
};
