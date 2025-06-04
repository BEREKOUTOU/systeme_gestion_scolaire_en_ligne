import React, { forwardRef } from 'react';

const Input = forwardRef(({
  type = "text",
  label,
  id,
  name,
  placeholder,
  required = false,
  error,
  helperText,
  fullWidth = true,
  className = "",
  ...props
}, ref) => {
  const inputClasses = `
    rounded-md border
    ${error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'}
    shadow-sm px-4 py-2
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `;

  return (
    <div className={`${fullWidth ? 'w-full' : ''} mb-4`}>
      {label && (
        <label 
          htmlFor={id || name} 
          className="block text-gray-700 font-medium mb-1"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <input
        ref={ref}
        type={type}
        id={id || name}
        name={name}
        placeholder={placeholder}
        className={inputClasses}
        required={required}
        {...props}
      />
      
      {helperText && !error && (
        <p className="mt-1 text-sm text-gray-500">{helperText}</p>
      )}
      
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;