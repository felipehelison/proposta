import React from 'react';

const Button = ({ children, onClick, type = "button", ...props }) => (
  <button
    type={type}
    onClick={onClick}
    className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition duration-200"
    {...props}
  >
    {children}
  </button>
);

export default Button;
