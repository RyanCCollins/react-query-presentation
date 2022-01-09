import { useQuery } from 'react-query';
import queryClient from '../../client';
import { getProperty, getInquiries } from '../../api';
import { POLL_INTERVAL } from '../../constants';

export const useLoadPropertyQuery = (propertyId) => {
  const propertiesClientState = queryClient.getQueryState(['properties']);
  return useQuery(['properties', propertyId], () => getProperty(propertyId), {
    initialData: propertiesClientState?.data?.find(
      (property) => property.id === propertyId
    ),
    initialDataUpdatedAt: propertiesClientState?.dataUpdatedAt,
  });
};

export const useLoadInquiriesQuery = (propertyId) =>
  useQuery(['inquiries', propertyId], () => getInquiries(propertyId), {
    refetchInterval: POLL_INTERVAL,
    keepPreviousData: true,
    select: (data) => data.sort((a, b) => b.id - a.id),
  });
