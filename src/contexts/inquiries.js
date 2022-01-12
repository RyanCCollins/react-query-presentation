import React, { createContext, useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useInquiries } from '../hooks';

export const InquiriesContext = createContext({
  loading: true,
  data: undefined,
  error: undefined,
});

export function InquiriesProvider({ children, propertyId }) {
  const { loading, data, error } = useInquiries(propertyId);

  const value = useMemo(
    () => ({
      loading,
      data,
      error,
    }),
    [loading, data, error]
  );
  return (
    <InquiriesContext.Provider value={value}>
      {children}
    </InquiriesContext.Provider>
  );
}

InquiriesProvider.propTypes = {
  children: PropTypes.node.isRequired,
  propertyId: PropTypes.string.isRequired,
};

export const useInquiriesContext = () => useContext(InquiriesContext);
