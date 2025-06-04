import React, { useState } from 'react';

const DocumentUpload = () => {
  const [documents, setDocuments] = useState({
    transcript: null,
    idCard: null,
    photo: null
  });

  const [uploadStatus, setUploadStatus] = useState({
    transcript: '',
    idCard: '',
    photo: ''
  });

  const documentTypes = [
    {
      id: 'transcript',
      name: 'Academic Transcript',
      description: 'Official academic records from your previous institution',
      acceptedFormats: '.pdf,.doc,.docx'
    },
    {
      id: 'idCard',
      name: 'ID Card/Passport',
      description: 'Valid government-issued identification',
      acceptedFormats: '.pdf,.jpg,.jpeg,.png'
    },
    {
      id: 'photo',
      name: 'Passport Photo',
      description: 'Recent passport-sized photograph',
      acceptedFormats: '.jpg,.jpeg,.png'
    }
  ];

  const handleFileChange = (e, documentId) => {
    const file = e.target.files[0];
    if (file) {
      // Update documents state
      setDocuments(prev => ({
        ...prev,
        [documentId]: file
      }));
      
      // Update status to show file selected
      setUploadStatus(prev => ({
        ...prev,
        [documentId]: 'ready'
      }));
    }
  };

  const handleUpload = async (documentId) => {
    const file = documents[documentId];
    if (!file) return;

    try {
      setUploadStatus(prev => ({
        ...prev,
        [documentId]: 'uploading'
      }));

      // Simulated upload - Replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      setUploadStatus(prev => ({
        ...prev,
        [documentId]: 'completed'
      }));
    } catch (error) {
      setUploadStatus(prev => ({
        ...prev,
        [documentId]: 'error'
      }));
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'ready':
        return 'text-yellow-600';
      case 'uploading':
        return 'text-blue-600';
      case 'completed':
        return 'text-green-600';
      case 'error':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'ready':
        return 'Ready to upload';
      case 'uploading':
        return 'Uploading...';
      case 'completed':
        return 'Upload complete';
      case 'error':
        return 'Upload failed';
      default:
        return 'No file selected';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Document Upload</h2>
        <p className="text-gray-600 mb-8">
          Please upload the following required documents. Accepted formats are specified for each document type.
        </p>

        <div className="space-y-6">
          {documentTypes.map((doc) => (
            <div
              key={doc.id}
              className="border rounded-lg p-6 bg-gray-50"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold">{doc.name}</h3>
                  <p className="text-gray-600 text-sm mt-1">{doc.description}</p>
                  <p className="text-gray-500 text-sm mt-1">
                    Accepted formats: {doc.acceptedFormats}
                  </p>
                </div>
                <span className={`${getStatusColor(uploadStatus[doc.id])} text-sm font-medium`}>
                  {getStatusText(uploadStatus[doc.id])}
                </span>
              </div>

              <div className="flex items-center space-x-4">
                <label
                  htmlFor={`file-${doc.id}`}
                  className="flex-1 cursor-pointer"
                >
                  <div className="px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 transition-colors">
                    <input
                      type="file"
                      id={`file-${doc.id}`}
                      className="hidden"
                      accept={doc.acceptedFormats}
                      onChange={(e) => handleFileChange(e, doc.id)}
                    />
                    <div className="text-center">
                      <p className="text-gray-600">
                        {documents[doc.id]
                          ? documents[doc.id].name
                          : 'Click to select or drag and drop'}
                      </p>
                    </div>
                  </div>
                </label>

                {documents[doc.id] && uploadStatus[doc.id] !== 'completed' && (
                  <button
                    onClick={() => handleUpload(doc.id)}
                    disabled={uploadStatus[doc.id] === 'uploading'}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Upload
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-end">
          <button
            type="button"
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            disabled={!Object.values(uploadStatus).every(status => status === 'completed')}
          >
            Complete Registration
          </button>
        </div>
      </div>
    </div>
  );
};

export default DocumentUpload;
