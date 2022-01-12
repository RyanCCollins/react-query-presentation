import { useEffect, useMemo, useState } from 'react';
import { getInquiries } from '../api';

export const useInquiries = (propertyId) => {
  const [query, setQuery] = useState({
    loading: true,
    data: [],
    error: undefined,
  });

  useEffect(() => {
    (async () => {
      try {
        setQuery((prev) => ({ ...prev, loading: true }));
        const data = await getInquiries(propertyId);
        setQuery((prev) => ({
          ...prev,
          loading: false,
          error: undefined,
          data,
        }));
      } catch (err) {
        setQuery((prev) => ({
          ...prev,
          error: 'An unexpected error happened, please try again',
          loading: false,
        }));
      }
    })();
  }, [propertyId]);

  return useMemo(
    () => ({
      ...query,
    }),
    [query]
  );
};
