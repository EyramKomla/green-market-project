import React from 'react';
import { useParams } from 'react-router-dom';
import { CheckCircleIcon, TruckIcon, GiftIcon, ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline';

export default function OrderDetails() {
  const { orderId } = useParams();
  const formattedOrderId = `#${orderId}`; // Add the # back for comparison

  // Mock order data - replace with actual data fetching
  const order = {
    id: '#96459761',
    date: '17 Jan, 2024 at 7:32 PM',
    status: 'Packaging',
    total: 99.00,
    products: [
      {
        name: 'Fresh Tomatoes',
        quantity: 2,
        price: 25.00,
        image: '/images/products/tomatoes.jpg'
      },
      // Add more products as needed
    ],
    timeline: [
      {
        status: 'Order Confirmed',
        date: '19 Jan, 2024 at 2:31 PM',
        completed: true
      },
      {
        status: 'Order Verified',
        date: '20 Jan, 2024 at 7:33 PM',
        completed: true
      },
      {
        status: 'Packaging',
        date: '21 Jan, 2024 at 9:45 AM',
        completed: true
      },
      {
        status: 'On The Road',
        date: 'Pending',
        completed: false
      },
      {
        status: 'Delivered',
        date: 'Pending',
        completed: false
      }
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-sm p-6">
        {/* Order Header */}
        <div className="flex justify-between items-center border-b pb-4">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Order {order.id}</h1>
            <p className="text-sm text-gray-500">{order.date}</p>
          </div>
          <div className="text-right">
            <p className="text-lg font-semibold text-[#468847]">GH₵{order.total.toFixed(2)}</p>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
              {order.status}
            </span>
          </div>
        </div>

        {/* Order Timeline */}
        <div className="mt-8">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Order Activity</h2>
          <div className="relative">
            {order.timeline.map((step, index) => (
              <div key={step.status} className="flex items-center mb-8 last:mb-0">
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center
                  ${step.completed ? 'bg-[#468847] text-white' : 'bg-gray-200 text-gray-400'}`}>
                  {index === 0 && <ClipboardDocumentCheckIcon className="w-5 h-5" />}
                  {index === 1 && <CheckCircleIcon className="w-5 h-5" />}
                  {index === 2 && <GiftIcon className="w-5 h-5" />}
                  {index === 3 && <TruckIcon className="w-5 h-5" />}
                  {index === 4 && <CheckCircleIcon className="w-5 h-5" />}
                </div>
                <div className="ml-4 flex-1">
                  <p className="text-sm font-medium text-gray-900">{step.status}</p>
                  <p className="text-sm text-gray-500">{step.date}</p>
                </div>
                {index < order.timeline.length - 1 && (
                  <div className="absolute left-4 top-8 -ml-px h-full w-0.5 bg-gray-200" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Order Items */}
        <div className="mt-8">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Order Items</h2>
          <div className="space-y-4">
            {order.products.map((product, index) => (
              <div key={index} className="flex items-center space-x-4 border-b pb-4 last:border-0">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-16 w-16 object-cover rounded-md"
                />
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                  <p className="text-sm text-gray-500">
                    Quantity: {product.quantity} × GH₵{product.price.toFixed(2)}
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  GH₵{(product.quantity * product.price).toFixed(2)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}