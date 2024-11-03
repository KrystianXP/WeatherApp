import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);

import React, { useState } from 'react';

const DropdownButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button>Najedź na mnie</button>
      {isOpen && (
        <ul style={{ border: '1px solid #ccc', listStyleType: 'none', padding: '10px' }}>
          <li>Element 1</li>
          <li>Element 2</li>
          <li>Element 3</li>
        </ul>
      )}
    </div>
  );
};

export default DropdownButton;