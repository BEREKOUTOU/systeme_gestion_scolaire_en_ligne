import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const InvoiceList = () => {
  // This would typically come from your API/backend
  const [invoices] = useState([
    {
      id: 'INV-2025-001',
      description: 'Registration Fee',
      amount: 250.00,
      status: 'paid',
      dueDate: '2025-06-15',
      paidAt: '2025-06-02',
      type: 'registration'
    },
    {
      id: 'INV-2025-002',
      description: 'First Semester Tuition',
      amount: 3500.00,
      status: 'pending',
      dueDate: '2025-07-01',
      paidAt: null,
      type: 'tuition'
    },
    {
      id: 'INV-2025-003',
      description: 'Student Services Fee',
      amount: 150.00,
      status: 'overdue',
      dueDate: '2025-06-01',
      paidAt: null,
      type: 'fees'
    }
  ]);

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

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatAmount = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold">Invoices</h2>
              <p className="text-gray-600 mt-1">Manage your payments and billing information</p>
            </div>
            <div className="flex space-x-4">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Payment Methods
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
                Download All
              </button>
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-gray-500 text-sm font-medium">Outstanding Balance</h3>
            <p className="text-2xl font-bold mt-2">
              {formatAmount(
                invoices
                  .filter(inv => inv.status !== 'paid')
                  .reduce((sum, inv) => sum + inv.amount, 0)
              )}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-gray-500 text-sm font-medium">Next Payment Due</h3>
            <p className="text-2xl font-bold mt-2">
              {formatDate(
                invoices
                  .filter(inv => inv.status === 'pending')
                  .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))[0]?.dueDate
              )}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-gray-500 text-sm font-medium">Paid This Year</h3>
            <p className="text-2xl font-bold mt-2">
              {formatAmount(
                invoices
                  .filter(inv => inv.status === 'paid')
                  .reduce((sum, inv) => sum + inv.amount, 0)
              )}
            </p>
          </div>
        </div>

        {/* Invoice List */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Invoice
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Due Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {invoices.map((invoice) => (
                  <tr key={invoice.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div>
                          <div className="font-medium text-gray-900">{invoice.id}</div>
                          <div className="text-sm text-gray-500">{invoice.description}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {formatAmount(invoice.amount)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{formatDate(invoice.dueDate)}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeClass(invoice.status)}`}>
                        {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Link
                        to={`/billing/invoices/${invoice.id}`}
                        className="text-blue-600 hover:text-blue-900 mr-4"
                      >
                        View
                      </Link>
                      {invoice.status !== 'paid' && (
                        <Link
                          to={`/billing/payment/${invoice.id}`}
                          className="text-green-600 hover:text-green-900"
                        >
                          Pay Now
                        </Link>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceList;
