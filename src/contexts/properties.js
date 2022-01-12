import React, { createContext, useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useProperties } from '../hooks';

export const PropertiesContext = createContext({
  loading: true,
  data: undefined,
  error: undefined,
});

export function PropertiesProvider({ children }) {
  const { loading, data, error } = useProperties();

  const value = useMemo(
    () => ({
      loading,
      data,
      error,
    }),
    [loading, data, error]
  );
  return (
    <PropertiesContext.Provider value={value}>
      {children}
    </PropertiesContext.Provider>
  );
}

PropertiesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const usePropertiesContext = () => useContext(PropertiesContext);
