import { getInquiries } from '../api';

export const LOAD_INQUIRIES_START = 'LOAD_INQUIRIES_START';
export const LOAD_INQUIRIES_LOADED = 'LOAD_INQUIRIES_LOADED';
export const LOAD_INQUIRIES_ERROR = 'LOAD_INQUIRIES_ERROR';
export const CLEAR_INQUIRIES = 'CLEAR_INQUIRIES';

export const clearInquiries = () => ({
  type: CLEAR_INQUIRIES,
});

export const loadInquiries = (propertyId) => (dispatch, getState) => {
  const { page } = getState().inquiries;

  dispatch({
    type: LOAD_INQUIRIES_START,
  });

  return getInquiries(propertyId, page)
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: LOAD_INQUIRIES_LOADED,
        payload: data,
      });
    })
    .catch((err) => {
      dispatch({
        type: LOAD_INQUIRIES_ERROR,
        payload: err,
      });
    });
};
