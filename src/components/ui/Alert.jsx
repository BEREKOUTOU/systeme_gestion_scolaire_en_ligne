import React, { useState, useEffect } from 'react';

const Alert = ({
  type = "info",
  title,
  message,
  onClose,
  autoClose = false,
  autoCloseTime = 5000,
  className = "",
  ...props
}) => {
  const [visible, setVisible] = useState(true);
  
  // Setup for automatically closing the alert
  useEffect(() => {
    if (autoClose) {
      const timer = setTimeout(() => {
        setVisible(false);
        if (onClose) onClose();
      }, autoCloseTime);
      
      return () => clearTimeout(timer);
    }
  }, [autoClose, autoCloseTime, onClose]);

  if (!visible) return null;

  // Styles for different alert types
  const alertStyles = {
    info: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      icon: "text-blue-500",
      title: "text-blue-800",
      text: "text-blue-700",
    },
    success: {
      bg: "bg-green-50",
      border: "border-green-200",
      icon: "text-green-500",
      title: "text-green-800",
      text: "text-green-700",
    },
    warning: {
      bg: "bg-yellow-50",
      border: "border-yellow-200",
      icon: "text-yellow-500",
      title: "text-yellow-800",
      text: "text-yellow-700",
    },
    error: {
      bg: "bg-red-50",
      border: "border-red-200",
      icon: "text-red-500",
      title: "text-red-800",
      text: "text-red-700",
    },
  };

  const style = alertStyles[type] || alertStyles.info;

  // Icons based on alert type
  const alertIcons = {
    info: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
      </svg>
    ),
    success: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
      </svg>
    ),
    warning: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
      </svg>
    ),
    error: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path>
      </svg>
    ),
  };

  return (
    <div
      className={`${style.bg} ${style.border} border rounded-lg p-4 mb-4 ${className}`}
      role="alert"
      {...props}
    >
      <div className="flex items-start">
        {/* Alert Icon */}
        <div className={`flex-shrink-0 ${style.icon}`}>
          {alertIcons[type]}
        </div>
        
        {/* Alert Content */}
        <div className="ml-3 flex-1">
          {title && (
            <h3 className={`text-sm font-medium ${style.title}`}>
              {title}
            </h3>
          )}
          
          {message && (
            <div className={`text-sm mt-1 ${style.text}`}>
              {message}
            </div>
          )}
        </div>
        
        {/* Close Button */}
        {onClose && (
          <button
            type="button"
            className={`ml-auto -mx-1.5 -my-1.5 p-1.5 rounded-lg focus:ring-2 ${style.icon} hover:bg-opacity-25 hover:bg-gray-500 focus:outline-none`}
            onClick={() => {
              setVisible(false);
              onClose();
            }}
          >
            <span className="sr-only">Fermer</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default Alert;