import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useOrdersQuery } from '@/features/orders/model/use-orders';
import OrderFilters from '@/features/orders/ui/OrderFilters';
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from '@/shared/ui/table';
import { Badge } from '@/shared/ui/badge';

import { CreateOrder } from '@/features/orders/ui/CreateOrder';
import { Button } from '@/shared/ui/button';

const OrdersPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const queryParams = Object.fromEntries(searchParams.entries());

  const { data, isLoading, isError, error } = useOrdersQuery(queryParams);

  const handleRowClick = (orderId: string) => {
    navigate(`/orders/${orderId}`);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Orders</h1>
        <CreateOrder>
          <Button>Create Order</Button>
        </CreateOrder>
      </div>
      <OrderFilters />
      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Carrier</TableHead>
              <TableHead className="text-right">Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={5} className="h-24 text-center">
                  Loading...
                </TableCell>
              </TableRow>
            ) : isError ? (
              <TableRow>
                <TableCell colSpan={5} className="h-24 text-center text-destructive">
                  Error: {error.message}
                </TableCell>
              </TableRow>
            ) : (
              data?.data.map((order: any) => (
                <TableRow
                  key={order.id}
                  onClick={() => handleRowClick(order.id)}
                  className="cursor-pointer"
                >
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{order.status}</Badge>
                  </TableCell>
                  <TableCell>{order.carrier}</TableCell>
                  <TableCell className="text-right">${order.total.toFixed(2)}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default OrdersPage;
