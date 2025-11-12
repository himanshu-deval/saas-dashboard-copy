import apiClient from '@/shared/api/client';

const mockShipments = [
  { id: 'SHP001', orderId: 'ORD001', trackingId: '1Z999AA10123456784', carrier: 'UPS', status: 'In Transit' },
  { id: 'SHP002', orderId: 'ORD002', trackingId: '9400100000000000000000', carrier: 'FedEx', status: 'Delivered' },
  { id: 'SHP003', orderId: 'ORD003', trackingId: 'CJ123456789US', carrier: 'DHL', status: 'Out for Delivery' },
];

export const getShipments = async (params: any = {}): Promise<any> => {
  console.log('Fetching shipments with params:', params);
  const data = mockShipments.filter(shipment =>
    params.q ?
    shipment.trackingId.toLowerCase().includes(params.q.toLowerCase()) ||
    shipment.orderId.toLowerCase().includes(params.q.toLowerCase()) :
    true
  );

  return Promise.resolve({
    data,
    meta: { total: data.length, page: 1, limit: 10 },
  });
};
