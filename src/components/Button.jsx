import React from 'react';

const Button = ({ color, size, background, text, borderRadius }) => {
  return (
    <button
      className={`text-${size} p-3 hover:drop-shadow-xl`}
      type="button"
      style={{ color, background, borderRadius }}
    >
      {text}
    </button>
  );
};

export default Button;
