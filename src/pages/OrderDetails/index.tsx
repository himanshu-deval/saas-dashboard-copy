import React from 'react';
import { useParams } from 'react-router-dom';
import { useOrderDetailsQuery } from '@/features/orders/model/use-order-details';
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card';
import { Badge } from '@/shared/ui/badge';

const OrderDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data: order, isLoading, isError, error } = useOrderDetailsQuery(id!);

  if (isLoading) {
    return <div>Loading order details...</div>;
  }

  if (isError) {
    return <div className="text-destructive">Error: {error.message}</div>;
  }

  if (!order) {
    return <div>Order not found.</div>;
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Order Details: {order.id}</h1>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Customer Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p><strong>Name:</strong> {order.customer}</p>
            <p><strong>Address:</strong> {order.address}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <p><strong>Status:</strong> <Badge>{order.status}</Badge></p>
            <p><strong>Carrier:</strong> {order.carrier}</p>
            <p><strong>Total:</strong> ${order.total.toFixed(2)}</p>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Items</CardTitle>
        </CardHeader>
        <CardContent>
          <ul>
            {order.items.map((item: any) => (
              <li key={item.sku}>{item.name} (x{item.quantity})</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default OrderDetailsPage;
