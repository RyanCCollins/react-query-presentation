import { useQuery } from 'react-query';
import { getProperties } from '../../api';

export const useLoadPropertiesQuery = () =>
  useQuery(['properties'], getProperties);
