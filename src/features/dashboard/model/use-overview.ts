import { useQuery } from '@tanstack/react-query';
import { getDashboardOverview } from '../api';

const QUERY_KEY = ['dashboardOverview'];

export const useOverview = () => {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: getDashboardOverview,
  });
};
