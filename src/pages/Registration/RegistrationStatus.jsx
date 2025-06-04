import React from 'react';

const RegistrationStatus = () => {
  // This would typically come from your API/backend
  const registrationSteps = [
    {
      id: 'personal_info',
      title: 'Personal Information',
      status: 'completed',
      description: 'Basic personal details submitted',
      completedAt: '2025-06-02T14:30:00Z'
    },
    {
      id: 'documents',
      title: 'Document Upload',
      status: 'in_progress',
      description: '2 of 3 documents uploaded',
      completedAt: null
    },
    {
      id: 'verification',
      title: 'Document Verification',
      status: 'pending',
      description: 'Awaiting document review',
      completedAt: null
    },
    {
      id: 'payment',
      title: 'Registration Fee',
      status: 'pending',
      description: 'Registration fee payment pending',
      completedAt: null
    },
    {
      id: 'approval',
      title: 'Final Approval',
      status: 'pending',
      description: 'Awaiting administrative approval',
      completedAt: null
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'in_progress':
        return 'bg-blue-500';
      case 'pending':
        return 'bg-gray-300';
      default:
        return 'bg-gray-300';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return (
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        );
      case 'in_progress':
        return (
          <svg className="w-6 h-6 text-white animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        );
      default:
        return (
          <span className="w-6 h-6 flex items-center justify-center text-gray-500">
            {registrationSteps.findIndex(step => step.id === status) + 1}
          </span>
        );
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Registration Status</h2>
        
        {/* Progress bar */}
        <div className="relative pt-1 mb-8">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                Registration Progress
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold inline-block text-blue-600">
                {(registrationSteps.filter(step => step.status === 'completed').length / registrationSteps.length * 100).toFixed(0)}%
              </span>
            </div>
          </div>
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
            <div
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
              style={{ width: `${(registrationSteps.filter(step => step.status === 'completed').length / registrationSteps.length * 100)}%` }}
            />
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-4">
          {registrationSteps.map((step, index) => (
            <div
              key={step.id}
              className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50"
            >
              <div className={`flex-shrink-0 w-10 h-10 rounded-full ${getStatusColor(step.status)} flex items-center justify-center`}>
                {getStatusIcon(step.status)}
              </div>
              <div className="flex-grow">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  {step.completedAt && (
                    <span className="text-sm text-gray-500">
                      Completed {formatDate(step.completedAt)}
                    </span>
                  )}
                </div>
                <p className="text-gray-600 mt-1">{step.description}</p>
                {step.status === 'in_progress' && (
                  <button className="mt-2 text-sm text-blue-600 hover:text-blue-700 font-medium">
                    Continue
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <h4 className="font-semibold text-blue-700">Next Steps</h4>
          <p className="text-blue-600 mt-1">
            {registrationSteps.find(step => step.status === 'in_progress' || step.status === 'pending')?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationStatus;
