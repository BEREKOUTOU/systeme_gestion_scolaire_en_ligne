import React from 'react';
import { useParams, Link } from 'react-router-dom';

const InvoiceDetails = () => {
  const { id } = useParams();

  // This would typically come from your API/backend
  const invoice = {
    id: 'INV-2025-002',
    description: 'First Semester Tuition',
    amount: 3500.00,
    status: 'pending',
    dueDate: '2025-07-01',
    issuedDate: '2025-06-01',
    paidAt: null,
    type: 'tuition',
    items: [
      {
        description: 'Tuition Fee',
        amount: 3000.00
      },
      {
        description: 'Laboratory Fee',
        amount: 300.00
      },
      {
        description: 'Library Fee',
        amount: 200.00
      }
    ],
    billingDetails: {
      name: 'John Doe',
      email: 'john.doe@example.com',
      address: '123 Student Street',
      city: 'College Town',
      country: 'United States'
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatAmount = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case 'paid':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'overdue':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center space-x-4">
                <Link
                  to="/billing/invoices"
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                </Link>
                <h2 className="text-2xl font-bold">Invoice {invoice.id}</h2>
              </div>
              <p className="text-gray-600 mt-1">{invoice.description}</p>
            </div>
            <div className="flex space-x-4">
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
                Download PDF
              </button>
              {invoice.status !== 'paid' && (
                <Link
                  to={`/billing/payment/${invoice.id}`}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  Pay Now
                </Link>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Status Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-gray-500 text-sm font-medium">Status</h3>
            <span className={`mt-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeClass(invoice.status)}`}>
              {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
            </span>
          </div>

          {/* Due Date Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-gray-500 text-sm font-medium">Due Date</h3>
            <p className="text-lg font-semibold mt-2">{formatDate(invoice.dueDate)}</p>
          </div>

          {/* Amount Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-gray-500 text-sm font-medium">Total Amount</h3>
            <p className="text-lg font-semibold mt-2">{formatAmount(invoice.amount)}</p>
          </div>
        </div>

        {/* Invoice Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Items */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-4 border-b">
              <h3 className="text-lg font-semibold">Invoice Items</h3>
            </div>
            <div className="p-6">
              <table className="min-w-full">
                <tbody className="divide-y divide-gray-200">
                  {invoice.items.map((item, index) => (
                    <tr key={index}>
                      <td className="py-3 text-sm text-gray-900">{item.description}</td>
                      <td className="py-3 text-sm text-gray-900 text-right">
                        {formatAmount(item.amount)}
                      </td>
                    </tr>
                  ))}
                  <tr className="font-semibold">
                    <td className="py-3">Total</td>
                    <td className="py-3 text-right">{formatAmount(invoice.amount)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Billing Details */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-4 border-b">
              <h3 className="text-lg font-semibold">Billing Details</h3>
            </div>
            <div className="p-6">
              <dl className="space-y-4">
                <div>
                  <dt className="text-sm font-medium text-gray-500">Name</dt>
                  <dd className="mt-1 text-sm text-gray-900">{invoice.billingDetails.name}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Email</dt>
                  <dd className="mt-1 text-sm text-gray-900">{invoice.billingDetails.email}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500">Address</dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {invoice.billingDetails.address}<br />
                    {invoice.billingDetails.city}<br />
                    {invoice.billingDetails.country}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceDetails;
