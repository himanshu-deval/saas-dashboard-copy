import apiClient from '@/shared/api/client';
import { createQueryString } from '@/shared/api/http';

const mockOrders = [
  { id: 'ORD001', customer: 'Liam Johnson', status: 'Fulfilled', total: 250.00, carrier: 'FedEx', address: '123 Main St, Anytown, USA', items: [{ sku: 'SKU001', name: 'Product A', quantity: 2 }] },
  { id: 'ORD002', customer: 'Olivia Smith', status: 'Processing', total: 150.00, carrier: 'UPS', address: '456 Oak Ave, Someplace, USA', items: [{ sku: 'SKU002', name: 'Product B', quantity: 1 }] },
  { id: 'ORD003', customer: 'Noah Williams', status: 'Shipped', total: 350.00, carrier: 'DHL', address: '789 Pine Ln, Elsewhere, USA', items: [{ sku: 'SKU003', name: 'Product C', quantity: 3 }] },
  { id: 'ORD004', customer: 'Emma Brown', status: 'Fulfilled', total: 450.00, carrier: 'FedEx', address: '101 Maple Dr, Anycity, USA', items: [{ sku: 'SKU004', name: 'Product D', quantity: 1 }] },
  { id: 'ORD005', customer: 'Oliver Jones', status: 'Cancelled', total: 550.00, carrier: 'UPS', address: '212 Birch Rd, Somewhere, USA', items: [{ sku: 'SKU005', name: 'Product E', quantity: 5 }] },
];

export const getOrders = async (params: any = {}): Promise<any> => {
  // This is a mock implementation.
  // const queryString = createQueryString(params);
  // const response = await apiClient.get(`/orders?${queryString}`);
  // return response.data;

  console.log('Fetching orders with params:', params);

  const data = mockOrders.filter(order => params.q ? order.customer.toLowerCase().includes(params.q.toLowerCase()) : true);

  return Promise.resolve({
    data,
    meta: {
      total: data.length,
      page: 1,
      limit: 10,
    },
  });
};

export const createOrder = async (data: any): Promise<any> => {
  // This is a mock implementation.
  // const response = await apiClient.post('/orders', data);
  // return response.data;

  console.log('Creating order with data:', data);
  const newOrder = {
    id: `ORD${Math.floor(Math.random() * 900) + 100}`,
    ...data,
    status: 'Processing',
    carrier: 'FedEx', // default
  };
  return Promise.resolve(newOrder);
};

const mockOrders = [
  { id: 'ORD001', customer: 'Liam Johnson', status: 'Fulfilled', total: 250.00, carrier: 'FedEx', address: '123 Main St, Anytown, USA', items: [{ sku: 'SKU001', name: 'Product A', quantity: 2 }] },
  { id: 'ORD002', customer: 'Olivia Smith', status: 'Processing', total: 150.00, carrier: 'UPS', address: '456 Oak Ave, Someplace, USA', items: [{ sku: 'SKU002', name: 'Product B', quantity: 1 }] },
  { id: 'ORD003', customer: 'Noah Williams', status: 'Shipped', total: 350.00, carrier: 'DHL', address: '789 Pine Ln, Elsewhere, USA', items: [{ sku: 'SKU003', name: 'Product C', quantity: 3 }] },
  { id: 'ORD004', customer: 'Emma Brown', status: 'Fulfilled', total: 450.00, carrier: 'FedEx', address: '101 Maple Dr, Anycity, USA', items: [{ sku: 'SKU004', name: 'Product D', quantity: 1 }] },
  { id: 'ORD005', customer: 'Oliver Jones', status: 'Cancelled', total: 550.00, carrier: 'UPS', address: '212 Birch Rd, Somewhere, USA', items: [{ sku: 'SKU005', name: 'Product E', quantity: 5 }] },
];

export const getOrderDetails = async (orderId: string): Promise<any> => {
  console.log('Fetching details for order:', orderId);
  const order = mockOrders.find(o => o.id === orderId);
  if (order) {
    return Promise.resolve(order);
  }
  return Promise.reject(new Error('Order not found'));
};
