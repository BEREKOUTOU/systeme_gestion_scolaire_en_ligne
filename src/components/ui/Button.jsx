import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  type = "button", 
  variant = "primary", 
  size = "md",
  disabled = false,
  fullWidth = false,
  className = "",
  ...props 
}) => {
  // Define variant styles
  const variantStyles = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800 focus:ring-gray-500",
    success: "bg-green-600 hover:bg-green-700 text-white focus:ring-green-500",
    danger: "bg-red-600 hover:bg-red-700 text-white focus:ring-red-500",
    warning: "bg-yellow-500 hover:bg-yellow-600 text-white focus:ring-yellow-500",
    info: "bg-cyan-500 hover:bg-cyan-600 text-white focus:ring-cyan-500",
    light: "bg-gray-100 hover:bg-gray-200 text-gray-800 focus:ring-gray-400",
    dark: "bg-gray-800 hover:bg-gray-900 text-white focus:ring-gray-700",
    link: "bg-transparent text-blue-600 hover:underline focus:ring-blue-500 hover:bg-transparent",
    outline: "bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500",
  };

  // Define size styles
  const sizeStyles = {
    sm: "py-1 px-2 text-sm",
    md: "py-2 px-4",
    lg: "py-3 px-6 text-lg",
  };

  // Combined classes
  const classes = `
    ${variantStyles[variant] || variantStyles.primary}
    ${sizeStyles[size] || sizeStyles.md}
    ${fullWidth ? "w-full" : ""}
    rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2
    transition-all duration-200 ease-in-out
    ${disabled ? "opacity-50 cursor-not-allowed" : ""}
    ${className}
  `;

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;