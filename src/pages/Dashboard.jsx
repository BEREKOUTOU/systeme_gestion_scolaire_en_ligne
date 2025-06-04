import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Overview Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Overview</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Status</span>
                <span className="font-medium">Active</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Registration</span>
                <span className="font-medium">Complete</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Documents</span>
                <span className="font-medium">2/3 Uploaded</span>
              </div>
            </div>
          </div>

          {/* Quick Actions Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full text-left px-4 py-2 rounded-md bg-blue-50 text-blue-600 hover:bg-blue-100">
                Upload Documents
              </button>
              <button className="w-full text-left px-4 py-2 rounded-md bg-blue-50 text-blue-600 hover:bg-blue-100">
                View Profile
              </button>
              <button className="w-full text-left px-4 py-2 rounded-md bg-blue-50 text-blue-600 hover:bg-blue-100">
                Update Information
              </button>
            </div>
          </div>

          {/* Notifications Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Recent Notifications</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-3">
                <p className="font-medium">Document Verification</p>
                <p className="text-sm text-gray-600">Your documents are being reviewed</p>
                <p className="text-xs text-gray-400">2 hours ago</p>
              </div>
              <div className="border-l-4 border-green-500 pl-3">
                <p className="font-medium">Registration Complete</p>
                <p className="text-sm text-gray-600">Your registration was successful</p>
                <p className="text-xs text-gray-400">1 day ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
