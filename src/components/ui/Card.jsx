import React from 'react';

const Card = ({
  children,
  title,
  subtitle,
  headerActions,
  footer,
  variant = "default",
  className = "",
  ...props
}) => {
  // Define variant styles
  const variantStyles = {
    default: "bg-white",
    outlined: "bg-white border border-gray-200",
    elevated: "bg-white shadow-md",
  };

  return (
    <div 
      className={`
        ${variantStyles[variant] || variantStyles.default}
        rounded-lg overflow-hidden
        ${className}
      `}
      {...props}
    >
      {/* Card header */}
      {(title || headerActions) && (
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <div>
            {title && <h3 className="text-lg font-semibold text-gray-800">{title}</h3>}
            {subtitle && <p className="mt-1 text-sm text-gray-600">{subtitle}</p>}
          </div>
          
          {headerActions && (
            <div className="flex space-x-2">
              {headerActions}
            </div>
          )}
        </div>
      )}
      
      {/* Card content */}
      <div className="px-6 py-4">
        {children}
      </div>
      
      {/* Card footer */}
      {footer && (
        <div className="px-6 py-3 bg-gray-50 border-t border-gray-200">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;