import { useEffect, useMemo, useState } from 'react';
import { getProperties } from '../api';

export const useProperties = () => {
  const [query, setQuery] = useState({
    loading: true,
    data: [],
    error: undefined,
  });

  useEffect(() => {
    (async () => {
      try {
        setQuery((prev) => ({ ...prev, loading: true }));
        const propertiesResponse = await getProperties();
        setQuery((prev) => ({
          ...prev,
          loading: false,
          error: undefined,
          data: propertiesResponse,
        }));
      } catch (err) {
        setQuery((prev) => ({
          ...prev,
          error: 'An unexpected error happened, please try again',
          loading: false,
        }));
      }
    })();
  }, []);

  return useMemo(
    () => ({
      ...query,
    }),
    [query]
  );
};
