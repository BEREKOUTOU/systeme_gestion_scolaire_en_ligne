import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const Payment = () => {
  const { id } = useParams();
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardDetails, setCardDetails] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: ''
  });
  const [loading, setLoading] = useState(false);

  // This would typically come from your API/backend
  const invoice = {
    id: 'INV-2025-002',
    description: 'First Semester Tuition',
    amount: 3500.00,
    dueDate: '2025-07-01'
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulated payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      // Here you would typically make an API call to process the payment
      
      // Redirect to success page or show success message
      alert('Payment processed successfully!');
    } catch (error) {
      alert('Payment failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const formatAmount = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <div className="flex items-center space-x-4">
            <Link
              to={`/billing/invoices/${id}`}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </Link>
            <div>
              <h2 className="text-2xl font-bold">Payment</h2>
              <p className="text-gray-600 mt-1">Invoice {invoice.id}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Payment Form */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-6">Payment Method</h3>
                
                {/* Payment Method Selection */}
                <div className="mb-6">
                  <div className="flex space-x-4">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('card')}
                      className={`flex-1 p-4 border rounded-lg ${
                        paymentMethod === 'card'
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200'
                      }`}
                    >
                      <div className="font-medium">Credit Card</div>
                      <div className="text-sm text-gray-500">Pay with credit or debit card</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('bank')}
                      className={`flex-1 p-4 border rounded-lg ${
                        paymentMethod === 'bank'
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200'
                      }`}
                    >
                      <div className="font-medium">Bank Transfer</div>
                      <div className="text-sm text-gray-500">Pay directly from your bank</div>
                    </button>
                  </div>
                </div>

                {/* Credit Card Form */}
                {paymentMethod === 'card' && (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Cardholder Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={cardDetails.name}
                        onChange={handleInputChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="number" className="block text-sm font-medium text-gray-700">
                        Card Number
                      </label>
                      <input
                        type="text"
                        id="number"
                        name="number"
                        value={cardDetails.number}
                        onChange={handleInputChange}
                        placeholder="1234 5678 9012 3456"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="expiry" className="block text-sm font-medium text-gray-700">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          id="expiry"
                          name="expiry"
                          value={cardDetails.expiry}
                          onChange={handleInputChange}
                          placeholder="MM/YY"
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">
                          CVC
                        </label>
                        <input
                          type="text"
                          id="cvc"
                          name="cvc"
                          value={cardDetails.cvc}
                          onChange={handleInputChange}
                          placeholder="123"
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                          required
                        />
                      </div>
                    </div>
                  </form>
                )}

                {/* Bank Transfer Details */}
                {paymentMethod === 'bank' && (
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Bank Account Details</h4>
                      <dl className="space-y-2">
                        <div className="flex justify-between">
                          <dt className="text-gray-600">Bank Name:</dt>
                          <dd className="font-medium">University Bank</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-gray-600">Account Name:</dt>
                          <dd className="font-medium">University Account</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-gray-600">Account Number:</dt>
                          <dd className="font-medium">1234567890</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-gray-600">Routing Number:</dt>
                          <dd className="font-medium">987654321</dd>
                        </div>
                      </dl>
                    </div>
                    <div className="text-sm text-gray-500">
                      Please include your Invoice ID ({invoice.id}) as the payment reference.
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Payment Summary */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4">Payment Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Amount</span>
                  <span className="font-medium">{formatAmount(invoice.amount)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Processing Fee</span>
                  <span className="font-medium">{formatAmount(0)}</span>
                </div>
                <div className="border-t pt-3 mt-3">
                  <div className="flex justify-between">
                    <span className="font-semibold">Total</span>
                    <span className="font-semibold">{formatAmount(invoice.amount)}</span>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                onClick={handleSubmit}
                disabled={loading}
                className="w-full mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Processing...' : `Pay ${formatAmount(invoice.amount)}`}
              </button>

              <p className="mt-4 text-sm text-gray-500 text-center">
                Your payment is secure and encrypted
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
