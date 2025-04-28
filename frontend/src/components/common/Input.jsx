import React from 'react';

const Input = ({ label, type = "text", value, onChange, ...props }) => (
  <div className="mb-4">
    <label className="block mb-1 font-semibold">{label}</label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      {...props}
    />
  </div>
);

export default Input;
