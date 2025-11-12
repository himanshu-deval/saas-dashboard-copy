import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from '@/shared/ui/dialog';
import { useCreateOrder } from '../model/use-create-order';

const orderSchema = z.object({
  customer: z.string().min(1, 'Customer name is required'),
  total: z.coerce.number().positive('Total must be a positive number'),
});

type OrderFormValues = z.infer<typeof orderSchema>;

export const CreateOrder = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { mutate: createOrder, isPending } = useCreateOrder();

  const form = useForm<OrderFormValues>({
    resolver: zodResolver(orderSchema),
  });

  const onSubmit = (values: OrderFormValues) => {
    createOrder(values, {
      onSuccess: () => {
        setIsOpen(false);
        form.reset();
      },
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Order</DialogTitle>
        </DialogHeader>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Input {...form.register('customer')} placeholder="Customer Name" />
            {form.formState.errors.customer && (
              <p className="text-sm text-destructive">{form.formState.errors.customer.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Input {...form.register('total')} type="number" placeholder="Total Amount" />
            {form.formState.errors.total && (
              <p className="text-sm text-destructive">{form.formState.errors.total.message}</p>
            )}
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" disabled={isPending}>
              {isPending ? 'Creating...' : 'Create Order'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
