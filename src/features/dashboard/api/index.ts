import apiClient from '@/shared/api/client';

// In a real app, you would define the types for the dashboard data.
export const getDashboardOverview = async (): Promise<any> => {
  // This is a mock implementation.
  // In a real app, you would make a request to your API.
  // const response = await apiClient.get('/dashboard/overview');
  // return response.data;

  return Promise.resolve({
    kpis: [
      { title: 'Total Revenue', value: '$45,231.89', change: '+20.1%' },
      { title: 'Subscriptions', value: '+2350', change: '+180.1%' },
      { title: 'Sales', value: '+12,234', change: '+19%' },
      { title: 'Active Now', value: '+573', change: '+201' },
    ],
    performanceChart: {
      // data for recharts
    },
    recentOrders: [
      // list of recent orders
    ],
  });
};
