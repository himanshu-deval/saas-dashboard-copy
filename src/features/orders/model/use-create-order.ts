import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createOrder } from '../api';
import { toast } from 'sonner';
import { ApiError } from '@/shared/types';

export const useCreateOrder = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createOrder,
    onSuccess: () => {
      toast.success('Order created successfully!');
      // Invalidate the orders query to refetch the list
      queryClient.invalidateQueries({ queryKey: ['orders'] });
    },
    onError: (error: ApiError) => {
      toast.error(error.message || 'Failed to create order.');
    },
  });
};
