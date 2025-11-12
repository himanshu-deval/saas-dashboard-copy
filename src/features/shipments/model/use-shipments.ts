import { useQuery } from '@tanstack/react-query';
import { getShipments } from '../api';

const QUERY_KEY = ['shipments'];

export const useShipmentsQuery = (params: any = {}) => {
  return useQuery({
    queryKey: [...QUERY_KEY, params],
    queryFn: () => getShipments(params),
  });
};
