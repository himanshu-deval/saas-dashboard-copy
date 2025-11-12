import { useQuery } from '@tanstack/react-query';
import { getOrders } from '../api';

const QUERY_KEY = ['orders'];

export const useOrdersQuery = (params: any = {}) => {
  return useQuery({
    queryKey: [...QUERY_KEY, params],
    queryFn: () => getOrders(params),
  });
};
