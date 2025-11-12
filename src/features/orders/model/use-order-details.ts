import { useQuery } from '@tanstack/react-query';
import { getOrderDetails } from '../api';

const QUERY_KEY = ['orderDetails'];

export const useOrderDetailsQuery = (orderId: string) => {
  return useQuery({
    queryKey: [...QUERY_KEY, orderId],
    queryFn: () => getOrderDetails(orderId),
    enabled: !!orderId, // Only run the query if orderId is available
  });
};
